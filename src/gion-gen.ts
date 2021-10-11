import { SpecialWord, specialWordList } from "./special-word"

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

export default class GionGenerator
{
	public result = ""

	generate(forcedResult?: string, forcedCase?: number): this
	{
		const randomHiragana = [...Array(2)].map(() => getRandomHiragana())
		const randomHiraganaWithSmallCharacter = getRandomHiraganaWithSmallCharacter()

		if (!(typeof forcedResult === "undefined")) this.result = forcedResult

		/*
		 * 1/5の確率を生成
		 * 0, 1, 2, 3, 4
		 */
		else if (typeof forcedCase === "undefined" && !(Math.floor(Math.random() * 5) === 1))
		{
			/*
			 * [0][1] [0][1]
			 * てくてく
			 */
			this.result = `${randomHiragana[0]}${randomHiragana[1]}`.repeat(2)
		}

		else
		{
			switch (forcedCase ?? Math.floor(Math.random() * 6))
			{
			case 0:
			/*
			 * {0}[0] {0}[0]
			 * しゅるしゅる
			 */
				this.result = `${randomHiraganaWithSmallCharacter}${randomHiragana[0]}`.repeat(2)
				break

			case 1:
			/*
			 * [0]{0} [0]{0}
			 * がちゃがちゃ
			 */
				this.result = `${randomHiragana[0]}${randomHiraganaWithSmallCharacter}`.repeat(2)
				break

		/*
		 * NG: [0]っ [0]
		 * ぴっぴ
		 */

		/*
		 * {0}っ {0}
		 * きゅっきゅ
		 */
			case 2:
				this.result = `${randomHiraganaWithSmallCharacter}っ${randomHiraganaWithSmallCharacter}`
				break

		/*
		 * [0]っ[1] [0][1]
		 * ぎっとぎと
		 */
			case 3:
				this.result = `${randomHiragana[0]}っ${randomHiragana[1]}${randomHiragana[0]}${randomHiragana[1]}`
				break

		/*
		 * [0]っ{0} [0]{0}
		 * べっちょべちょ
		 */
			case 4:
				this.result = `${randomHiragana[0]}っ${randomHiraganaWithSmallCharacter}${randomHiragana[0]}${randomHiraganaWithSmallCharacter}`
				break

		/*
		 * NG: {0}っ[0] {0}[0]
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
		 * [0]{0}っ [0]{0}っ
		 * どぴゅっどぴゅっ
		 */
			case 5:
				this.result = `${randomHiragana[0]}${randomHiraganaWithSmallCharacter}っ`.repeat(2)
				break

		/*
		 * NG: {0}[0]っ {0}[0]
		 * ひょろっひょろ
		 */

		/*
		 * NG: {0}{1}っ {0}{1}
		 * にょぎゃっにょぎゃ
		 */

			default:
				throw new Error("Unexpected value")
			}
		}

		return this
	}

	getSpecialWord(): SpecialWord | undefined
	{
		return specialWordList.get(this.result)
	}
}
