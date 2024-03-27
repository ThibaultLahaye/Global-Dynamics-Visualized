/**
 * Main script file
 */

import { loadBarChart } from "./barcharts";
import { loadDetails } from "./details";
import { loadMap } from "./map";

/**
 * Load necessary data files
 */


/**
 * Show the main world map
 */
loadMap();

/**
 * Show the bar charts for Ukraine and Russia
 */
loadBarChart();

/**
 * Show the details section on the right side
 */
loadDetails();