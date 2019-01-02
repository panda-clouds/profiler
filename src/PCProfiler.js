class PCProfiler  {

	constructor(name) {
		this.profilerName = name
		this.count = 1;
		this.totalBegining = this.lastTick = new Date();
	}

	tick(string) {
		const now = new Date();
		if(!string) string = "tick " + this.count;
		this.count ++;
		const profilerName = this.profilerName ? this.profilerName + " " : "";
		const message = profilerName + string + ": " + (now.getTime() - this.totalBegining.getTime()) + "s (Δ " + (now.getTime() - this.lastTick.getTime()) + ")";
		// eslint-disable-next-line no-console
		console.info(message)
		this.lastTick = now;
		return message;
	}

}

module.exports = PCProfiler;
