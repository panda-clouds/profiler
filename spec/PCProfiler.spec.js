
const PCProfiler = require("../src/PCProfiler.js");

describe('PCProfiler', () => {

	it('works correctly', (done) => {
		const profiler = new PCProfiler("test");
		setTimeout(function(){
			const tick1 = profiler.tick();
			expect(tick1).toMatch(/test tick 1: 30[0-9][0-9]s \(Δ 30[0-9][0-9]\)/)
			setTimeout(function(){
				const tick2 = profiler.tick("message");
				expect(tick2).toMatch(/test message: 60[0-9][0-9]s \(Δ 30[0-9][0-9]\)/)
				done();
			}, 3000);
		}, 3000);
	},10 * 1000);
});


