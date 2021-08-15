// TODO: 促音を追加する

const pickRandomCharacter = (string: string): string => string[Math.floor(Math.random() * string.length)]

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

export const gionGenerator =
{
	generate: (): string =>
	{
		if (Math.random() < 0.8)
		{
			// ABAB
			return `${getRandomHiragana()}${getRandomHiragana()}`.repeat(2)
		}
		else if (Math.random() < 0.5)
		{
			// A'BA'B
			return `${getRandomHiraganaWithSmallCharacter()}${getRandomHiragana()}`.repeat(2)
		}
		// AB'AB'
		return `${getRandomHiragana()}${getRandomHiraganaWithSmallCharacter()}`.repeat(2)
	},
}
