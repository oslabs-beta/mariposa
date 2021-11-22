/* eslint-disable filenames/match-exported */
/* eslint-disable import/namespace */
/* eslint-disable guard-for-in */
import * as secondary from ".";
var rooks = {};
for (var key in secondary) {
    rooks[key] = secondary[key];
}
export default rooks;
