const getRandomHiragana = (): string => {
	const hiragana =
		"あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだじづでどばびぶべぼぱぴぷぺぽ"
	return hiragana[Math.floor(Math.random() * hiragana.length)]
}

export const gionGenerator = {
	generate: () => `${getRandomHiragana()}${getRandomHiragana()}`.repeat(2),
}
