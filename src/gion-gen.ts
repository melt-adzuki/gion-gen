/* eslint-disable id-length */

import patterns from "./patterns"

const pickRandomCharacter = (string: string): string =>
{
	return string[Math.floor(Math.random() * string.length)]
}

const getRandomHiragana = (): string =>
{
	const hiragana = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだじづでどばびぶべぼぱぴぷぺぽ"
	return pickRandomCharacter(hiragana)
}

const getRandomHiraganaWithSmallCharacter = (): string =>
{
	const hiragana = "きしちにひみりぎじぢびぴ"
	const smallHiragana = "ゃゅょ"
	return `${pickRandomCharacter(hiragana)}${pickRandomCharacter(smallHiragana)}`
}

// パターンを解析して置換
const parse = (input: "AaAa" | typeof patterns[number]): string =>
{
	const tags = {
		A: getRandomHiragana(),
		B: getRandomHiraganaWithSmallCharacter(),
		a: getRandomHiragana(),
		b: getRandomHiraganaWithSmallCharacter(),
	}

	return input
		.split("")
		.map(character => Object.keys(tags).some(tag => character === tag) ? tags[character as keyof typeof tags] : character)
		.join("")
}

type Options = Partial<{
	forcedResult?: string
	forcedCase?: number
}>

// パターンの中からランダムに擬音を生成
const generate = ({ forcedResult, forcedCase }: Options = {}) =>
{
	if (forcedResult) return forcedResult

	const caseNumber = typeof forcedCase === "undefined" ? Math.floor(Math.random() * patterns.length * 2) : forcedCase
	const randomPattern = typeof patterns[caseNumber] === "undefined" ? "AaAa" : patterns[caseNumber]

	return parse(randomPattern)
}

export default generate
