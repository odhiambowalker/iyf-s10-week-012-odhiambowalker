import express from "express";
import mongoose from "mongoose";

const router = express.Router();

// @route   GET /api/health
// @desc    Health check endpoint
// @access  Public
router.get("/", async (req, res) => {
  try {
    // Check database connection
    const dbStatus = {
      0: "disconnected",
      1: "connected",
      2: "connecting",
      3: "disconnecting",
    };

    const healthcheck = {
      status: "ok",
      message: "CommunityHub API is running",
      timestamp: new Date().toISOString(),
      uptime: `${Math.floor(process.uptime())} seconds`,
      database: {
        status: dbStatus[mongoose.connection.readyState],
        name: mongoose.connection.name,
      },
      environment: process.env.NODE_ENV || "development",
      version: process.env.npm_package_version || "1.0.0",
    };

    // If database is not connected return warning
    if (mongoose.connection.readyState !== 1) {
      return res.status(200).json({
        ...healthcheck,
        status: "warning",
        message: "API is running but database is not connected",
      });
    }

    res.status(200).json(healthcheck);

  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Health check failed",
      timestamp: new Date().toISOString(),
      error: error.message,
    });
  }
});

export default router;
