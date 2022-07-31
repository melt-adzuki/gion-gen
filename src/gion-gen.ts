/* eslint-disable id-length */

import patterns from "./patterns"
import seedrandom from "seedrandom"

export default class GionGenerator
{
	private randomNumberGenerator!: seedrandom.PRNG

	constructor(private seed?: string)
	{ }

	private init(salt: number): void
	{
		this.randomNumberGenerator = this.seed ? seedrandom(this.seed + salt.toString()) : seedrandom()
	}

	private pickRandomCharacter(string: string): string
	{
		return string[Math.floor(this.randomNumberGenerator() * string.length)]
	}

	private getRandomHiragana(): string
	{
		const hiragana = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだじづでどばびぶべぼぱぴぷぺぽ"
		return this.pickRandomCharacter(hiragana)
	}

	private getRandomHiraganaWithSmallCharacter(): string
	{
		const hiragana = "きしちにひみりぎじぢびぴ"
		const smallHiragana = "ゃゅょ"
		return `${this.pickRandomCharacter(hiragana)}${this.pickRandomCharacter(smallHiragana)}`
	}

	// パターンを解析して置換
	private parse(input: "AaAa" | typeof patterns[number]): string
	{
		const tags = {
			A: this.getRandomHiragana(),
			B: this.getRandomHiraganaWithSmallCharacter(),
			a: this.getRandomHiragana(),
			b: this.getRandomHiraganaWithSmallCharacter(),
		}

		return input
			.split("")
			.map(character => Object.keys(tags).some(tag => character === tag) ? tags[character as keyof typeof tags] : character)
			.join("")
	}

	// パターンの中からランダムに擬音を生成
	public generate({ forcedResult, forcedCase, salt }: Partial<{ forcedResult: string, forcedCase: number, salt: number }> = {}): string
	{
		if (forcedResult) return forcedResult

		this.init(salt || 0)

		const caseNumber = typeof forcedCase === "undefined" ? Math.floor(this.randomNumberGenerator() * patterns.length) * 2 : forcedCase
		const randomPattern = typeof patterns[caseNumber] === "undefined" ? "AaAa" : patterns[caseNumber]

		return this.parse(randomPattern)
	}
}
