export interface SpecialWord {
	category: "UserMatch",
    title: string,
    description: string,
}

export const specialWordList = new Map<string, SpecialWord>([
	[
		"まふまふ",
		{
			category: "UserMatch",
			description: "高低差のある歌声、繊細かつ少々難解な歌詞、独特な世界観の楽曲を作る。",
			title: "uni_mafumafu",
		},
	],
])
