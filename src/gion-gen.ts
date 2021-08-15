const getRandomHiragana = (): string =>
{
	const hiragana = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだじづでどばびぶべぼぱぴぷぺぽ"
	return hiragana[Math.floor(Math.random() * hiragana.length)]
}
const getRandomHiraganaSmall = (): string =>
{
	// Const hiraganaSmall = "ぁぃぅぇぉゕゖっゃゅょ";
	const hiraganaSmall = "っゃゅょ"
	return hiraganaSmall[Math.floor(Math.random() * hiraganaSmall.length)]
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
			return `${getRandomHiragana()}${getRandomHiraganaSmall()}${getRandomHiragana()}`.repeat(2)
		}
		// AB'AB'
		return `${getRandomHiragana()}${getRandomHiragana()}${getRandomHiraganaSmall()}`.repeat(2)
	},
}
