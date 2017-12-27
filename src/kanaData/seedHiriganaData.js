const items = [
  {
    type: "hirigana",
    id:"01eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"あ",
    romaji:"a",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/01-A.png/500px-01-A.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/a.mp3",
    mnemonicHTML: "<span><span>あ</span> is an Astron<u>a</u>ut.</span>"
  },
  {
    type: "hirigana",
    id:"02eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"い",
    romaji:"i",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/02-I.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/i.mp3",
    mnemonicHTML: "<span>い is the two ii's at the end of Hawai<u>i</u>.</span>"
  },
  {
    type: "hirigana",
    id:"03eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"う",
    romaji:"u",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/03-U.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/u.mp3",
    mnemonicHTML: "<span>う is a <u>U</u> that got kicked over and had his head ripped off.</span>"
  },
  {
    type: "hirigana",
    id:"04eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"え",
    romaji:"e",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/65/04-E.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/e.mp3",
    mnemonicHTML: "<span>え is an <u>E</u>agle in the desert.</span>"
  },
  {
    type: "hirigana",
    id:"05eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"お",
    romaji:"o",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/36/05-O.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/o.mp3",
    mnemonicHTML: "<span>お is a h<u>o</u>le in one.</span>"
  },
  {
    type: "hirigana",
    id:"06eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"か",
    romaji:"ka",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/73/01-KA.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/ka.mp3",
    mnemonicHTML: "<span>か is a <u>Ka</u>t (cat) playing with a toy.</span>"
  },
  {
    type: "hirigana",
    id:"07eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"き",
    romaji:"ki",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/02-KI.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/ki.mp3",
    mnemonicHTML: "<span>き is a <u>Ki</u> (key).</span>"
  },
  {
    type: "hirigana",
    id:"08eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"く",
    romaji:"ku",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/03-KU.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/ku.mp3",
    mnemonicHTML: "<span>く is the wooden <u>Ku</u>ku bird inside a Cuckoo clock.</span>"
  },
  {
    type: "hirigana",
    id:"09eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"け",
    romaji:"ke",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/42/04-KE.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/ke.mp3",
    mnemonicHTML: "<span>け is a <u>Ke</u>strel, (a type of bird).</span>"
  },
  {
    type: "hirigana",
    id:"10eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"こ",
    romaji:"ko",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/05-KO.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/ko.mp3",
    mnemonicHTML: "<span>こ is two <u>Ko</u>i fish swimming.</span>"
  },
  {
    type: "hirigana",
    id:"11eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"さ",
    romaji:"sa",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/33/01-SA.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/sa.mp3",
    mnemonicHTML: "<span>さ is a <u>Sa</u>murai.</span>"
  },
  {
    type: "hirigana",
    id:"12eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"し",
    romaji:"shi",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/59/02-SHI.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/shi.mp3",
    mnemonicHTML: "<span>Shi</u> (she) has long hair.</span>"
  },
  {
    type: "hirigana",
    id:"13eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"す",
    romaji:"tsu",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/03-SU.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/su.mp3",
    mnemonicHTML: "<span>Su</u>nlight is what seeds need to grow.</span>"
  },
  {
    type: "hirigana",
    id:"14eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"せ",
    romaji:"se",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/82/04-SE.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/se.mp3",
    mnemonicHTML: "<span>せ is two friends watching the <u>Se</u>tting sun.</span>"
  },
  {
    type: "hirigana",
    id:"15eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"そ",
    romaji:"so",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/05-SO.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/so.mp3",
    mnemonicHTML: "<span>そ looks like the stiches of a <u>So</u>ing (sewing) machine.</span>"
  },
  {
    type: "hirigana",
    id:"16eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"た",
    romaji:"ta",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ab/01-TA.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/ta.mp3",
    mnemonicHTML: "<span>>た looks like <u>Ta</u> if you add a couple lines.</span>"
  },
  {
    type: "hirigana",
    id:"17eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"ち",
    romaji:"chi",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/02-CHI.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/chi.mp3",
    mnemonicHTML: "<span>ち is a <u>Chi</u>cken.</span>"
  },
  {
    type: "hirigana",
    id:"18eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"つ",
    romaji:"tsu",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/41/03-TSU.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/tsu.mp3",
    mnemonicHTML: "<span>つ is a <u>Tsu</u>nami wave.</span>"
  },
  {
    type: "hirigana",
    id:"19eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"て",
    romaji:"te",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/04-TE.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/te.mp3",
    mnemonicHTML: "<span>て is a broken <u>Te</u>nnis racket.</span>"
  },
  {
    type: "hirigana",
    id:"20eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"と",
    romaji:"to",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d1/05-TO.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/to.mp3",
    mnemonicHTML: "<span>と is the big <u>To</u>e.</span>"
  },
  {
    type: "hirigana",
    id:"21eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"な",
    romaji:"na",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/01-NA.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/na.mp3",
    mnemonicHTML: "<span>な is a <u>Na</u>tivity scene.</span>"
  },
  {
    type: "hirigana",
    id:"22eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"に",
    romaji:"ni",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/96/02-NI.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/ni.mp3",
    mnemonicHTML: "<span>に is a human <u>Ni</u> (knee).</span>"
  },
  {
    type: "hirigana",
    id:"23eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"ぬ",
    romaji:"nu",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b6/03-NU.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/nu.mp3",
    mnemonicHTML: "<span>ぬ is a <u>Nu</u>dle (noodle) and two chopsticks.</span>"
  },
  {
    type: "hirigana",
    id:"24eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"ね",
    romaji:"ne",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ef/04-NE.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/ne.mp3",
    mnemonicHTML: "<span>ね is a <u>Ne</u>ctarine fallen from its tree.</span>"
  },
  {
    type: "hirigana",
    id:"25eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"の",
    romaji:"no",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c8/05-NO.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/no.mp3",
    mnemonicHTML: "<span>の is the sign for <u>No</u>.</span>"
  },
  {
    type: "hirigana",
    id:"26eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"は",
    romaji:"ha",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/41/01-HA.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/ha.mp3",
    mnemonicHTML: "<span>は is a bird <u>Wa</u>lking on a branch. Can also sound like <u>Ha</u>.</span>"
  },
  {
    type: "hirigana",
    id:"27eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"ひ",
    romaji:"hi",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/00/02-HI.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/hi.mp3",
    mnemonicHTML: "<span>ひ is a man shouting <u>Hi</u>!</span>"
  },
  {
    type: "hirigana",
    id:"28eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"ふ",
    romaji:"fu",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/03-FU.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/fu.mp3",
    mnemonicHTML: "<span>ふ is mount <u>Fu</u>ji.</span>"
  },
  {
    type: "hirigana",
    id:"29eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"へ",
    romaji:"he",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1d/04-HE.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/he.mp3",
    mnemonicHTML: "<span>へ shows us where <u>He</u>aven is.</span>"
  },
  {
    type: "hirigana",
    id:"30eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"ほ",
    romaji:"ho",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f9/05-HO.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/ho.mp3",
    mnemonicHTML: "<span>ほ is a game of <u>Ho</u>ckey.</span>"
  },
  {
    type: "hirigana",
    id:"31eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"ま",
    romaji:"ma",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a6/01-MA.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/ma.mp3",
    mnemonicHTML: "<span>ま is a <u>Ma</u>ilbox.</span>"
  },
  {
    type: "hirigana",
    id:"32eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"み",
    romaji:"mi",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/21/02-MI.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/mi.mp3",
    mnemonicHTML: "<span>み <u>Mi</u> (me)? I'm 21.</span>"
  },
  {
    type: "hirigana",
    id:"33eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"む",
    romaji:"mu",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/83/03-MU.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/mu.mp3",
    mnemonicHTML: "<span>む is a smiley face and a <u>Mu</u>sical note.</span>"
  },
  {
    type: "hirigana",
    id:"34eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"め",
    romaji:"me",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/42/04-ME.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/me.mp3",
    mnemonicHTML: "<span>め is a <u>Me</u>dal.</span>"
  },
  {
    type: "hirigana",
    id:"35eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"も",
    romaji:"mo",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/09/05-MO.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/mo.mp3",
    mnemonicHTML: "<span>も You'll catch <u>Mo</u>re fish with two worms on the hook.</span>"
  },
  {
    type: "hirigana",
    id:"36eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"や",
    romaji:"ya",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/01-YA.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/ya.mp3",
    mnemonicHTML: "<span>や is a <u>Ya</u>k.</span>"
  },
  {
    type: "hirigana",
    id:"37eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"ゆ",
    romaji:"yu",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/44/02-YU.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/yu.mp3",
    mnemonicHTML: "<span>ゆ is a <u>Yu</u>-turn (U-turn) on a road.</span>"
  },
  {
    type: "hirigana",
    id:"38eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"よ",
    romaji:"yo",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f0/05-YO.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/yo.mp3",
    mnemonicHTML: "<span>よ is a <u>Yo</u>-yo.</span>"
  },
  {
    type: "hirigana",
    id:"39eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"ら",
    romaji:"ra",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/01-RA.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/ra.mp3",
    mnemonicHTML: "<span>ら is a <u>Ra</u>bbit.</span>"
  },
  {
    type: "hirigana",
    id:"40eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"り",
    romaji:"ri",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/02-RI.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/ri.mp3",
    mnemonicHTML: "<span>り is a <u>Ri</u>ver.</span>"
  },
  {
    type: "hirigana",
    id:"41eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"る",
    romaji:"ru",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/03-RU.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/ru.mp3",
    mnemonicHTML: "<span>る is a <u>Ru</u>by earring.</span>"
  },
  {
    type: "hirigana",
    id:"42eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"れ",
    romaji:"re",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/78/04-RE.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/re.mp3",
    mnemonicHTML: "<span>れ is a very similar to Ne, but has a tiny hook on the end. This hook is so small that only a <u>Re</u>ysin (raisin) can fit onto it.</span>"
  },
  {
    type: "hirigana",
    id:"43eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"ろ",
    romaji:"ro",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/05-RO.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/ro.mp3",
    mnemonicHTML: "<span>ろ looks like 3, which is the number of times you say <u>Ro</u>w in the song Row, row, row your boat.</span>"
  },
  {
    type: "hirigana",
    id:"44eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"わ",
    romaji:"wa",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/01-WA.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/wa.mp3",
    mnemonicHTML: "<span>わ is the grave of someone who died in <u>Wa</u>r.</span>"
  },
  {
    type: "hirigana",
    id:"45eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"を",
    romaji:"wo",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e9/02-WO.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/o.mp3",
    mnemonicHTML: "<span>を is a man who's <u>Wo</u>rried that the water will be too cold so he only sticks one toe in.</span>"
  },
  {
    type: "hirigana",
    id:"46eea358-d47b-4dab-9377-638c5b133cb7",
    kana:"ん",
    romaji:"n",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/36/00-N.png",
    mp3: "https://0.tqn.com/z/g/japanese/library/media/audio/n.mp3",
    mnemonicHTML: "<span>ん already looks like an <u>N</u>.</span>"
  },
];

export default items;