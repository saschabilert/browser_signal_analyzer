/*
 * plasma.js
 *
 * Copyright (C) 2016  Moritz Balter, Vlad Paul, Sascha Bilert
 * IHA @ Jade Hochschule applied licence see EOF
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * contact: moritz.balters@student.jade-hs.de
 * contact: sascha.bilert@student.jade-hs.de
 * contact: vlad.paul@student.jade-hs.de
 */




var plasmaScale;

function createPlasma(){
var rgbR=[0.0000,9.4987,18.9975,28.4962,37.9950,46.4737,54.9525,63.4312,71.9100,77.7112,83.5125,89.3137,95.1150,99.8325,104.5500,109.2675,113.9850,118.0013,122.0175,126.0338,130.0500,133.8113,137.5725,141.3337,145.0950,148.3463,151.5975,154.8488,158.1000,161.3512,164.6025,167.8537,171.1050,173.8463,176.5875,179.3287,182.0700,184.5563,187.0425,189.5288,192.0150,194.5013,196.9875,199.4738,201.9600,204.0000,206.0400,208.0800,210.1200,211.8412,213.5625,215.2838,217.0050,218.5350,220.0650,221.5950,223.1250,224.3363,225.5475,226.7588,227.9700,228.9900,230.0100,231.0300,232.0500,232.8150,233.5800,234.3450,235.1100,235.5563,236.0025,236.4488,236.8950,236.8950,236.8950,236.8950,236.8950,236.6400,236.3850,236.1300,235.8750,235.1738,234.4725,233.7712,233.0700,232.0500,231.0300,230.0100,228.9900,227.5238,226.0575,224.5913,223.1250,221.8500,220.5750,219.3000,218.0250]

var rgbG=[23.9700,21.4837,18.9975,16.5113,14.0250,11.0287,8.0325,5.0362,2.0400,1.5300,1.0200,0.5100,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.2550,0.5100,0.7650,1.0200,5.7375,10.4550,15.1725,19.8900,23.9063,27.9225,31.9387,35.9550,39.4613,42.9675,46.4737,49.9800,53.4862,56.9925,60.4988,64.0050,67.5112,71.0175,74.5238,78.0300,81.2813,84.5325,87.7837,91.0350,94.5412,98.0475,101.5537,105.0600,108.5663,112.0725,115.5788,119.0850,122.5913,126.0975,129.6038,133.1100,136.8075,140.5050,144.2025,147.9000,151.4063,154.9125,158.4187,161.9250,165.6863,169.4475,173.2087,176.9700,180.7312,184.4925,188.2538,192.0150,195.7762,199.5375,203.2988,207.0600,210.8213,214.5825,218.3438,222.1050,226.0575,230.0100,233.9625,237.9150,242.1863,246.4575,250.7287,255.0000]

var rgbB=[136.9350,136.9350,136.9350,136.9350,136.9350,137.1900,137.4450,137.7000,137.9550,138.4650,138.9750,139.4850,139.9950,140.2500,140.5050,140.7600,141.0150,141.0150,141.0150,141.0150,141.0150,141.0150,141.0150,141.0150,141.0150,140.5050,139.9950,139.4850,138.9750,138.2100,137.4450,136.6800,135.9150,135.2138,134.5125,133.8113,133.1100,131.5800,130.0500,128.5200,126.9900,125.5237,124.0575,122.5913,121.1250,119.0850,117.0450,115.0050,112.9650,110.4788,107.9925,105.5063,103.0200,100.0237,97.0275,94.0313,91.0350,87.5288,84.0225,80.5162,77.0100,72.2288,67.4475,62.6663,57.8850,51.1912,44.4975,37.8038,31.1100,23.3325,15.5550,7.7775,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,3.7613,7.5225,11.2838,15.0450,29.0063,42.9675,56.9288,70.8900]

plasmaScale=[rgbR, rgbG, rgbB];

}
