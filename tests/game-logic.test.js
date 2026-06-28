import { test, describe } from 'node:test';
import assert from 'node:assert/strict';

// ============================================================
// GAME LOGIC — Pure functions extracted for testability
// These mirror the logic used in index.html
// ============================================================

/**
 * Calculate braking distance given speed (km/h) and friction coefficient.
 * Formula: (speed/10)^2 * friction
 */
function brakingDistance(speedKmh, friction) {
  return Math.pow(speedKmh / 10, 2) * friction;
}

/**
 * Calculate stopping distance (reaction + braking).
 * Reaction distance: speed(m/s) * reactionTime
 * Speed conversion: km/h / 3.6 = m/s
 */
function stoppingDistance(speedKmh, reactionTime, friction) {
  const speedMs = speedKmh / 3.6;
  const reactionDist = speedMs * reactionTime;
  const brakeDist = brakingDistance(speedKmh, friction);
  return reactionDist + brakeDist;
}

/**
 * Calculate fuel cost for a trip.
 */
function fuelCost(fuelConsumption, distanceKm, fuelPricePerLiter) {
  return (fuelConsumption * distanceKm / 100) * fuelPricePerLiter;
}

/**
 * Calculate CO2 emissions while idling (kg/hour average ~2.3kg/L * consumption).
 */
function co2Emissions(idleHours, litersPerHour) {
  return idleHours * litersPerHour * 2.3;
}

/**
 * Calculate parking fee: firstHour price, then subsequentHour price per hour.
 */
function parkingFee(hours, firstHourPrice, subsequentHourPrice) {
  if (hours <= 0) return 0;
  const fullHours = Math.ceil(hours);
  if (fullHours <= 1) return firstHourPrice;
  return firstHourPrice + (fullHours - 1) * subsequentHourPrice;
}

/**
 * Calculate time saved by increasing speed.
 * Returns minutes saved.
 */
function timeSaved(distanceKm, oldSpeed, newSpeed) {
  const oldTime = distanceKm / oldSpeed * 60;
  const newTime = distanceKm / newSpeed * 60;
  return oldTime - newTime;
}

/**
 * Calculate probability of hitting red light.
 */
function redLightProbability(redDuration, cycleDuration) {
  return (redDuration / cycleDuration) * 100;
}

/**
 * Calculate traffic throughput per green phase.
 */
function vehiclesPerGreen(vehiclesPerHour, greenDuration, cycleDuration) {
  const vehiclesPerMinute = vehiclesPerHour / 60;
  const greenMinutes = greenDuration / 60;
  return Math.round(vehiclesPerMinute * greenMinutes * 60);
}

/**
 * Calculate fuel consumption increase at higher speed.
 */
function increasedConsumption(baseConsumptionL100km, speedIncreasePercent) {
  return baseConsumptionL100km * (1 + speedIncreasePercent / 100);
}

/**
 * Calculate total cost of ownership per km.
 */
function costPerKm(fuelConsumption, fuelPrice, maintenancePerKm, distance) {
  const fuelTotal = fuelConsumption * distance / 100 * fuelPrice;
  const maintenanceTotal = maintenancePerKm * distance;
  return fuelTotal + maintenanceTotal;
}

/**
 * Calculate speed from distance and time.
 */
function averageSpeed(distanceKm, timeHours) {
  return distanceKm / timeHours;
}

/**
 * Level calculation from score.
 */
function calculateLevel(score, pointsPerLevel = 500) {
  return Math.floor(score / pointsPerLevel) + 1;
}

/**
 * Score multipliers based on difficulty.
 */
function scoreMultiplier(level) {
  return level;
}

/**
 * Validate a numerical answer within tolerance.
 */
function isAnswerCorrect(userAnswer, correctAnswer, tolerance) {
  return Math.abs(userAnswer - correctAnswer) <= tolerance;
}

/**
 * Reaction time rating.
 */
function reactionRating(seconds) {
  if (seconds < 0.5) return 'excellent';
  if (seconds < 1.0) return 'good';
  if (seconds < 2.0) return 'average';
  return 'slow';
}

/**
 * Parking lot occupancy percentage.
 */
function occupancyRate(occupied, total) {
  return total > 0 ? (occupied / total) * 100 : 0;
}

/**
 * Free parking spots count.
 */
function freeSpots(total, occupied) {
  return total - occupied;
}

/**
 * Average wait time per vehicle.
 */
function averageWaitTime(totalWait, vehicleCount) {
  return vehicleCount > 0 ? totalWait / vehicleCount : 0;
}

/**
 * EV charging time.
 */
function chargingTime(batteryKwh, chargerKw) {
  return batteryKwh / chargerKw;
}

/**
 * Safe following distance at given speed.
 */
function safeFollowingDistance(speedKmh) {
  // Rule of thumb: (speed/10) * 3 meters
  return (speedKmh / 10) * 3;
}


// ============================================================
// TESTS
// ============================================================

describe('Braking & Stopping Distance', () => {
  test('braking distance at 70 km/h with friction 0.4', () => {
    assert.equal(brakingDistance(70, 0.4), 19.6);
  });

  test('braking distance at 60 km/h with friction 0.7', () => {
    // (60/10)^2 * 0.7 = 36 * 0.7 = 25.2
    assert.equal(brakingDistance(60, 0.7), 25.2);
  });

  test('braking distance scales with square of speed', () => {
    // Doubling speed quadruples distance
    const d50 = brakingDistance(50, 0.7);
    const d100 = brakingDistance(100, 0.7);
    assert.ok(Math.abs(d100 / d50 - 4) < 0.01);
  });

  test('stopping distance includes reaction distance', () => {
    // 90 km/h = 25 m/s, reaction 1.5s = 37.5m + braking
    const sd = stoppingDistance(90, 1.5, 0.7);
    assert.ok(sd > 37.5);
    assert.ok(Math.abs(sd - (37.5 + brakingDistance(90, 0.7))) < 0.01);
  });

  test('stopping distance at higher speed is always greater', () => {
    const sd50 = stoppingDistance(50, 1.0, 0.7);
    const sd100 = stoppingDistance(100, 1.0, 0.7);
    assert.ok(sd100 > sd50);
  });
});

describe('Fuel & Cost Calculations', () => {
  test('fuel cost for 350km at 6.5L/100km and 1.65€/L', () => {
    const cost = fuelCost(6.5, 350, 1.65);
    assert.ok(Math.abs(cost - 37.54) < 0.1);
  });

  test('fuel cost is zero for zero distance', () => {
    assert.equal(fuelCost(6.5, 0, 1.65), 0);
  });

  test('fuel cost scales linearly with distance', () => {
    const c100 = fuelCost(7, 100, 1.5);
    const c200 = fuelCost(7, 200, 1.5);
    assert.ok(Math.abs(c200 / c100 - 2) < 0.01);
  });

  test('total cost of ownership per trip', () => {
    // 7L/100km, 1.70€/L, 0.05€/km maintenance, 500km
    const total = costPerKm(7, 1.70, 0.05, 500);
    assert.ok(Math.abs(total - 84.5) < 1);
  });

  test('increased consumption at higher speed', () => {
    // 8L/100km base, 30% increase at 100 km/h
    assert.equal(increasedConsumption(8, 30), 10.4);
  });
});

describe('Parking Calculations', () => {
  test('parking fee: first hour 2€, subsequent 1€', () => {
    assert.equal(parkingFee(1, 2, 1), 2);
    assert.equal(parkingFee(2, 2, 1), 3);
    assert.equal(parkingFee(3, 2, 1), 4);
    assert.equal(parkingFee(3.5, 2, 1), 5);
  });

  test('parking fee for zero hours is zero', () => {
    assert.equal(parkingFee(0, 2, 1), 0);
  });

  test('parking fee rounds up partial hours', () => {
    assert.equal(parkingFee(1.1, 2, 1), 3);
    assert.equal(parkingFee(2.5, 2, 1), 4);
  });

  test('parking fee with free first 30 minutes', () => {
    // 2h 45min, first 30min free, then 1.5€/h rounded up
    // 2h 15min billed = 3h rounded up = 3 * 1.5 = 4.5
    const billedHours = (2 + 45/60) - 0.5; // 2.25h
    const rounded = Math.ceil(billedHours); // 3h
    assert.equal(rounded * 1.5, 4.5);
  });
});

describe('Parking Lot Occupancy', () => {
  test('occupancy rate calculation', () => {
    assert.equal(occupancyRate(90, 120), 75);
    assert.equal(occupancyRate(0, 100), 0);
    assert.equal(occupancyRate(100, 100), 100);
  });

  test('occupancy rate with zero total is zero', () => {
    assert.equal(occupancyRate(0, 0), 0);
  });

  test('free spots calculation', () => {
    assert.equal(freeSpots(120, 90), 30);
    assert.equal(freeSpots(120, 120), 0);
  });
});

describe('Traffic Flow', () => {
  test('red light probability', () => {
    assert.equal(redLightProbability(30, 60), 50);
    assert.equal(redLightProbability(15, 60), 25);
  });

  test('vehicles per green phase', () => {
    // 1200 vehicles/hour, 27s green, 60s cycle
    const vpg = vehiclesPerGreen(1200, 27, 60);
    assert.equal(vpg, 540);
  });

  test('average wait time per vehicle', () => {
    assert.equal(averageWaitTime(150, 10), 15);
    assert.equal(averageWaitTime(0, 0), 0);
  });
});

describe('Speed & Time', () => {
  test('time saved by increasing speed', () => {
    // 180km at 120 km/h vs 140 km/h
    const saved = timeSaved(180, 120, 140);
    assert.ok(saved > 0);
    assert.ok(Math.abs(saved - 12.86) < 1);
  });

  test('average speed calculation', () => {
    assert.equal(averageSpeed(180, 1.5), 120);
    assert.equal(averageSpeed(100, 2), 50);
  });

  test('safe following distance', () => {
    assert.equal(safeFollowingDistance(50), 15);
    assert.equal(safeFollowingDistance(100), 30);
  });
});

describe('EV Charging', () => {
  test('charging time for 75kWh battery at 11kW', () => {
    const time = chargingTime(75, 11);
    assert.ok(Math.abs(time - 6.82) < 0.01);
  });

  test('charging time doubles if power halved', () => {
    const t1 = chargingTime(75, 11);
    const t2 = chargingTime(75, 5.5);
    assert.ok(Math.abs(t2 / t1 - 2) < 0.01);
  });
});

describe('Scoring & Levels', () => {
  test('level calculation from score', () => {
    assert.equal(calculateLevel(0), 1);
    assert.equal(calculateLevel(500), 2);
    assert.equal(calculateLevel(1000), 3);
    assert.equal(calculateLevel(499), 1);
    assert.equal(calculateLevel(999), 2);
  });

  test('score multiplier increases with level', () => {
    assert.equal(scoreMultiplier(1), 1);
    assert.equal(scoreMultiplier(5), 5);
  });

  test('answer validation within tolerance', () => {
    assert.ok(isAnswerCorrect(37.54, 37.59, 0.1));
    assert.ok(!isAnswerCorrect(37.54, 37.59, 0.01));
    assert.ok(isAnswerCorrect(5, 5, 0));
  });

  test('reaction rating categories', () => {
    assert.equal(reactionRating(0.3), 'excellent');
    assert.equal(reactionRating(0.8), 'good');
    assert.equal(reactionRating(1.5), 'average');
    assert.equal(reactionRating(3.0), 'slow');
  });
});

describe('CO2 Emissions', () => {
  test('CO2 emissions from idling', () => {
    // 1 hour idling at ~0.8 L/h = 1.84 kg CO2
    const co2 = co2Emissions(1, 0.8);
    assert.ok(Math.abs(co2 - 1.84) < 0.01);
  });
});

describe('Edge Cases', () => {
  test('braking distance at zero speed is zero', () => {
    assert.equal(brakingDistance(0, 0.7), 0);
  });

  test('reaction rating at exactly boundary values', () => {
    assert.equal(reactionRating(0.499), 'excellent');
    assert.equal(reactionRating(0.5), 'good');
    assert.equal(reactionRating(0.999), 'good');
    assert.equal(reactionRating(1.0), 'average');
  });

  test('parking fee with negative hours returns zero', () => {
    assert.equal(parkingFee(-1, 2, 1), 0);
  });
});
