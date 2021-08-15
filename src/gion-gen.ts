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
		const randomHiragana: Array<string> = [getRandomHiragana(), getRandomHiragana()]
		const randomHiraganaWithSmallCharacter: string = getRandomHiraganaWithSmallCharacter()

		/*
		 * 1/5の確率を生成
		 * 0, 1, 2, 3, 4
		 */
		if (!(Math.floor(Math.random() * 5) === 1))
		{
			/*
			 * [0][1] [0][1]
			 * てくてく
			 */
			return `${randomHiragana[0]}${randomHiragana[1]}`.repeat(2)
		}

		switch (Math.floor(Math.random() * 6))
		{
		case 0:
			/*
			 * {0}[0] {0}[0]
			 * しゅるしゅる
			 */
			return `${randomHiraganaWithSmallCharacter}${randomHiragana[0]}`.repeat(2)

		case 1:
			/*
			 * [0]{0} [0]{0}
			 * がちゃがちゃ
			 */
			return `${randomHiragana[0]}${randomHiraganaWithSmallCharacter}`.repeat(2)

		/*
		 * NG: [0]っ [0]
		 * ぴっぴ
		 */

		/*
		 * {0}っ {0}
		 * きゅっきゅ
		 */
		case 2:
			return `${randomHiraganaWithSmallCharacter}っ${randomHiraganaWithSmallCharacter}`

		/*
		 * [0]っ[1] [0][1]
		 * ぎっとぎと
		 */
		case 3:
			return `${randomHiragana[0]}っ${randomHiragana[1]}${randomHiragana[0]}${randomHiragana[1]}`

		/*
		 * [0]っ{1} [0]{1}
		 * べっちょべちょ
		 */
		case 4:
			return `${randomHiragana[0]}っ${randomHiraganaWithSmallCharacter}${randomHiragana[0]}${randomHiraganaWithSmallCharacter}`

		/*
		 * NG: {0}っ[1] {0}[1]
		 * ぴょっこぴょこ
		 */

		/*
		 * NG: {0}っ{1} {0}{1}
		 * ぴょっちゃぴょちゃ
		 */

		/*
		 * NG: [0][1]っ [0][1]
		 * かちっかち
		 */

		/*
		 * [0]{1}っ [0]{1}っ
		 * どぴゅっどぴゅっ
		 */
		case 5:
			return `${randomHiragana[0]}${randomHiraganaWithSmallCharacter}っ`.repeat(2)

		/*
		 * NG: {0}[1]っ {0}[1]
		 * ひょろっひょろ
		 */

		/*
		 * NG: {0}{1}っ {0}{1}
		 * にょぎゃっにょぎゃ
		 */

		default:
			return ""
		}
	},
}
