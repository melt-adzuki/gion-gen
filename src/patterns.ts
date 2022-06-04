/* eslint-disable array-element-newline */

/*
 * A, a -> は、ば、ぱ
 * B, b -> ぎゃ
 */

const patterns = [
	// デフォルト: てくてく

	// しゅるしゅる
	"BABA",

	// がちゃがちゃ
	"ABAB",

	// NG: ぴっぴ

	// きゅっきゅ
	"BっB",

	// ぎっとぎと
	"AっaAa",

	// べっちょべちょ
	"AっBAB",

	// NG: ぴょっこぴょこ

	// NG: ぴょっちゃぴょちゃ

	// NG: かちっかち

	// どぴゅっどぴゅっ
	"ABっABっ",

	// NG: ひょろっひょろ

	// NG: にょぎゃっにょぎゃ
] as const

export default patterns
