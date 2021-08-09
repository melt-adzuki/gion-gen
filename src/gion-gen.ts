const getRandomHiragana = (): string =>
{
	const hiragana = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだじづでどばびぶべぼぱぴぷぺぽ"
	return hiragana[Math.floor(Math.random() * hiragana.length)]
}

export const gionGenerator =
{
	generate: (): string => `${getRandomHiragana()}${getRandomHiragana()}`.repeat(2),
}
