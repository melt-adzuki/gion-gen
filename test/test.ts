import { describe, it } from "mocha"
import GionGenerator from "../src/gion-gen"
import { expect } from "chai"

const gionGenerator = new GionGenerator()

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
				const gion = gionGenerator.generate({ forcedCase: options.caseToTest, salt: i })
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
			const gion = gionGenerator.generate({ salt: i })
			console.log("%d: %s", i, gion)
			expect(gion).not.to.equal("")
		}
	})

	testOutputLength(6, 6, 5, 5, 7, 8)
})
