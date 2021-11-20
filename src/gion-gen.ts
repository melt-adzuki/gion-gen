import { SpecialWord, specialWordList } from "./special-word"

namespace Utils {
	const pickRandomCharacter = (string: string): string =>
	{
		return string[Math.floor(Math.random() * string.length)]
	}

	export const getRandomHiragana = (): string =>
	{
		const hiragana = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだじづでどばびぶべぼぱぴぷぺぽ"
		return pickRandomCharacter(hiragana)
	}

	export const getRandomHiraganaWithSmallCharacter = (): string =>
	{
		const hiragana = "きしちにひみりぎじぢびぴ"
		const smallHiragana = "ゃゅょ"
		return `${pickRandomCharacter(hiragana)}${pickRandomCharacter(smallHiragana)}`
	}
}

export default class GionGenerator
{
	public result = ""

	public generate(forcedResult?: string, forcedCase?: number): this
	{
		const extracted = {
			hiragana: [Utils.getRandomHiragana(), Utils.getRandomHiragana()],
			hiraganaWithSmallCharacter: [Utils.getRandomHiraganaWithSmallCharacter()],
		} as const

		if (forcedResult) this.result = forcedResult

		/*
		 * 1/5の確率を生成
		 * 0, 1, 2, 3, 4
		 */
		else if (typeof forcedCase === "undefined" && !(Math.floor(Math.random() * 5) === 0))
		{
			/*
			 * [0][1] [0][1]
			 * てくてく
			 */
			this.result = `${extracted.hiragana[0]}${extracted.hiragana[1]}`.repeat(2)
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
				this.result = `${extracted.hiraganaWithSmallCharacter[0]}${extracted.hiragana[0]}`.repeat(2)
				break

			case 1:
			/*
			 * [0]{0} [0]{0}
			 * がちゃがちゃ
			 */
				this.result = `${extracted.hiragana[0]}${extracted.hiraganaWithSmallCharacter[0]}`.repeat(2)
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
				this.result = `${extracted.hiraganaWithSmallCharacter[0]}っ${extracted.hiraganaWithSmallCharacter[0]}`
				break

		/*
		 * [0]っ[1] [0][1]
		 * ぎっとぎと
		 */
			case 3:
				this.result = `${extracted.hiragana[0]}っ${extracted.hiragana[1]}${extracted.hiragana[0]}${extracted.hiragana[1]}`
				break

		/*
		 * [0]っ{0} [0]{0}
		 * べっちょべちょ
		 */
			case 4:
				this.result = `${extracted.hiragana[0]}っ${extracted.hiraganaWithSmallCharacter[0]}${extracted.hiragana[0]}${extracted.hiraganaWithSmallCharacter[0]}`
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
				this.result = `${extracted.hiragana[0]}${extracted.hiraganaWithSmallCharacter[0]}っ`.repeat(2)
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

	public getSpecialWord(): SpecialWord | undefined
	{
		return specialWordList.get(this.result)
	}
}
