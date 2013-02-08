var Timer = (function () {
    function Timer(timePeriod) {
        this.delta = 0;
        this.timePeriod = timePeriod;
        this.timeSinceLastUpdate = this.getTimeNow();
        this.isTimerPaused = false;
    }
    Timer.prototype.pause = function () {
        this.isTimerPaused = true;
    };
    Timer.prototype.hasTimePeriodPassed = function (rest) {
        if (typeof rest === "undefined") { rest = true; }
        if(this.delta > this.timePeriod) {
            if(rest) {
                this.delta = 0;
            }
            return true;
        } else {
            return false;
        }
    };
    Timer.prototype.reset = function () {
        this.delta = 0;
        this.timeSinceLastUpdate = this.getTimeNow();
        this.isTimerPaused = false;
    };
    Timer.prototype.getTimeLeft = function () {
        return this.timePeriod - this.delta;
    };
    Timer.prototype.getTimeLeftInSec = function () {
        return (this.timePeriod - this.delta) / 60;
    };
    Timer.prototype.getTimeNow = function () {
        return Date.now();
    };
    Timer.prototype.update = function () {
        if(this.isTimerPaused == false) {
            this.delta += this.getTimeNow() - this.timeSinceLastUpdate;
            this.timeSinceLastUpdate = this.getTimeNow();
        }
    };
    return Timer;
})();
