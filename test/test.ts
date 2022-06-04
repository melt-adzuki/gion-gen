import { describe, it } from "mocha"
import { expect } from "chai"
import generate from "../src/gion-gen"

const testOutputLength = (...lengths: number[]): void =>
{
	lengths.map((length, index) => (
		{
			caseToTest: index,
			expectedLength: length,
		}
	)).forEach(options =>
	{
		it(`ケース${options.caseToTest}の文字数が${options.expectedLength}`, () =>
		{
			for (let i = 0; i <= 10; i++)
			{
				const gion = generate({ forcedCase: options.caseToTest })
				console.log("%d: %s", i, gion)
				expect(gion).to.be.lengthOf(options.expectedLength)
			}
		})
	})
}

describe("ジェネレーターの出力", () =>
{
	it("空ではない", () =>
	{
		for (let i = 0; i <= 100; i++)
		{
			const gion = generate()
			console.log("%d: %s", i, gion)
			expect(gion).not.to.equal("")
		}
	})

	testOutputLength(6, 6, 5, 5, 7, 8)
})
