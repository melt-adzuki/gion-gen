// TODO: 促音を追加する

const getRandomHiragana = (): string =>
{
	const hiragana = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだじづでどばびぶべぼぱぴぷぺぽ"
	return hiragana[Math.floor(Math.random() * hiragana.length)]
}

const getRandomHiraganaWithSmallCharacter = (): string =>
{
	const hiragana = "きしちにひみりぎじぢびぴ"
	const smallHiragana = "ゃゅょ"
	return `${hiragana[Math.floor(Math.random() * hiragana.length)]}${smallHiragana[Math.floor(Math.random() * smallHiragana.length)]}`
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
