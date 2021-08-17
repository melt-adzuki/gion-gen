import { describe, it } from "mocha"
import { expect } from "chai"
import { gionGenerator } from "../src/gion-gen"

const testOutputLength = (...options: Array<[number, number]>): void => options.forEach(option =>
{
	it(`ケース${option[0]}の文字数が${option[1]}`, () =>
	{
		for (let i = 0; i <= 10; i++)
		{
			const gion = gionGenerator.generate(option[0])
			console.log("%d: %s", i, gion)
			expect(gion).to.be.lengthOf(option[1])
		}
	})
})

describe("ジェネレーターの出力", () =>
{
	it("空ではない", () =>
	{
		for (let i = 0; i <= 100; i++)
		{
			const gion = gionGenerator.generate()
			console.log("%d: %s", i, gion)
			expect(gion).not.to.equal("")
		}
	})

	testOutputLength([0, 6], [1, 6], [2, 5], [3, 5], [4, 7], [5, 8])
})
