const revealNodes = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
    }
  );

  revealNodes.forEach((node) => revealObserver.observe(node));
} else {
  revealNodes.forEach((node) => node.classList.add("is-visible"));
}

const moodButtons = document.querySelectorAll(".mood-button");
const heroStage = document.querySelector("#hero-stage");
const heroImage = document.querySelector("#hero-image");
const heroCaptionText = document.querySelector("#hero-caption-text");
const heroCaptionLink = document.querySelector("#hero-caption-link");
const heroLine = document.querySelector("#hero-line");
const heroLineNote = document.querySelector("#hero-line-note");
const heroFocusTitle = document.querySelector("#hero-focus-title");
const heroFocusCopy = document.querySelector("#hero-focus-copy");

const moodContent = {
  mountain: {
    character: "空",
    image: "assets/images/wang-wei-winter-landscape.jpg",
    imageAlt: "传为王维的冬景山水图，层峦与留白相互映衬",
    captionText: "视觉引子：《Winter Landscape》，来源 ",
    captionHref:
      "https://commons.wikimedia.org/wiki/File:Wang_Wei_-_Winter_Landscape_-_21.412_-_Rhode_Island_School_of_Design_Museum.jpg",
    line: "明月松间照，清泉石上流。",
    lineNote: "王维把光、声与空间压缩成一帧会流动的山水镜头。",
    focusTitle: "空山模式",
    focusCopy: "适合先进入《山居秋暝》，看“静”如何由月、泉、竹、莲层层构成。",
  },
  yangguan: {
    character: "关",
    image: "assets/images/wang-wei-cascade.jpg",
    imageAlt: "王维山水图《Cascade》，水势与山岩形成向远处延展的动势",
    captionText: "视觉切换：《Cascade》，来源 ",
    captionHref: "https://commons.wikimedia.org/wiki/File:Wang_Wei_-_Cascade.jpg",
    line: "劝君更尽一杯酒，西出阳关无故人。",
    lineNote: "一句口语化劝酒，被后世反复吟唱成中国送别文化的声音底本。",
    focusTitle: "阳关模式",
    focusCopy: "适合配合《阳关三叠》音频回读，让诗句从纸面延长为旋律。",
  },
};

const applyMood = (mood) => {
  const content = moodContent[mood];

  if (!content) {
    return;
  }

  document.body.dataset.mood = mood;

  if (heroStage) {
    heroStage.dataset.character = content.character;
  }

  if (heroImage) {
    heroImage.src = content.image;
    heroImage.alt = content.imageAlt;
  }

  if (heroCaptionText) {
    heroCaptionText.textContent = content.captionText;
  }

  if (heroCaptionLink) {
    heroCaptionLink.href = content.captionHref;
  }

  if (heroLine) {
    heroLine.textContent = content.line;
  }

  if (heroLineNote) {
    heroLineNote.textContent = content.lineNote;
  }

  if (heroFocusTitle) {
    heroFocusTitle.textContent = content.focusTitle;
  }

  if (heroFocusCopy) {
    heroFocusCopy.textContent = content.focusCopy;
  }

  moodButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.moodTarget === mood);
  });
};

moodButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyMood(button.dataset.moodTarget);
  });
});

applyMood(document.body.dataset.mood || "mountain");

const atlasCards = document.querySelectorAll(".knowledge-card");
const atlasTimelineButtons = document.querySelectorAll(".atlas-timeline-button");
const atlasBadge = document.querySelector("#atlas-badge");
const atlasStamp = document.querySelector("#atlas-stamp");
const atlasTitle = document.querySelector("#atlas-title");
const atlasSummary = document.querySelector("#atlas-summary");
const atlasTags = document.querySelector("#atlas-tags");
const atlasPoemTitle = document.querySelector("#atlas-poem-title");
const atlasPoemLine = document.querySelector("#atlas-poem-line");
const atlasPoints = document.querySelector("#atlas-points");

const atlasContent = {
  court: {
    badge: "阶段 01",
    stamp: "盛唐都城与宫廷经验",
    title: "长安与仕途：王维不是纯粹的隐士诗人",
    summary:
      "进入王维的第一步，不是先把他放进空山，而是先把他放回盛唐的都城文化里。宫廷、乐舞、交游、朝会与应制写作，使他形成了高度稳定的节奏感和秩序感，这也是后来他能把山水写得澄明而不散乱的重要原因。",
    tags: ["都城文化", "乐感训练", "秩序感"],
    poemTitle: "《和贾舍人早朝大明宫之作》",
    poemLine: "九天阊阖开宫殿，万国衣冠拜冕旒。",
    points: [
      "把王维看成“隐逸诗人”之前，先看到他深度参与盛唐公共文化的一面。",
      "宫廷诗训练了他的场面调度能力，让他后来写山水时也能保持结构稳定。",
      "这种都市经验解释了王维为何既能写静观，也能写送别、出塞和边地感受。",
    ],
  },
  wangchuan: {
    badge: "阶段 02",
    stamp: "山居空间与生活方式的形成",
    title: "辋川与山居：王维在自然里建立可居住的诗歌空间",
    summary:
      "辋川不是简单的退居，而是王维把生活方式、视觉经验和精神追求放到同一空间里重新组合的地方。山、水、月、松、竹、泉在这里不断重复出现，于是自然景物不再只是背景，而成为可以容纳人的呼吸、劳动与停留的秩序。",
    tags: ["辋川别业", "山居空间", "可停留的自然"],
    poemTitle: "《山居秋暝》",
    poemLine: "明月松间照，清泉石上流。",
    points: [
      "辋川使王维的诗从“写景”转向“营造空间”，读者会感到自己像走进现场。",
      "他写山林时并不排斥人间活动，而是把浣女、渔舟等生活痕迹并入山水节律。",
      "这就是王维山水诗最迷人的地方：它不是荒山空谷，而是可居、可游、可静观的世界。",
    ],
  },
  painting: {
    badge: "阶段 03",
    stamp: "以取景、留白和点染组织诗句",
    title: "诗中有画：关键不在“像画”，而在“怎么构图”",
    summary:
      "学界讨论“诗中有画”时，越来越强调它不是平面的风景复制，而是一种审美组织方式。王维擅长删繁就简，只放入最关键的景物节点，再用光线、声音和留白让读者在脑海中自行完成画面，这也是他诗歌耐看的原因。",
    tags: ["取景", "留白", "写意布局"],
    poemTitle: "《终南别业》",
    poemLine: "行到水穷处，坐看云起时。",
    points: [
      "王维很少把景物堆满，而是把画面压缩到几个关键意象上，让读者自己补全空间。",
      "他常常先写景物运动，再让人物从景中显现，这是一种非常“画面化”的调度方式。",
      "因此读王维不能只盯住名句，还要看句与句之间如何制造距离、停顿和视线转换。",
    ],
  },
  yangguan: {
    badge: "阶段 04",
    stamp: "送别诗进入吟唱与琴歌传统",
    title: "阳关与歌诗：王维的情绪为什么能被反复唱出来",
    summary:
      "《送元二使安西》之所以流传极广，不只是因为它写得感人，更因为它具有极强的可歌性。前两句铺景，第三句动作聚焦，第四句空间猛然拉远；这种回环结构非常适合反复吟唱，也让一次送别逐渐变成跨时代的文化记忆。",
    tags: ["送别仪式", "回环结构", "可歌性"],
    poemTitle: "《送元二使安西》",
    poemLine: "劝君更尽一杯酒，西出阳关无故人。",
    points: [
      "王维把难以说尽的离情压缩进“一杯酒”这个动作里，情感因此更沉着也更持久。",
      "“无故人”不仅是朋友不在，更意味着都市秩序和情感支撑的消失。",
      "当这首诗被唱成《阳关三叠》，王维的语言便从诗歌进入声音传统，形成集体记忆。",
    ],
  },
};

const renderList = (container, items) => {
  if (!container) {
    return;
  }

  container.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    container.appendChild(li);
  });
};

const applyAtlasTopic = (topic) => {
  const content = atlasContent[topic];

  if (!content) {
    return;
  }

  if (atlasBadge) {
    atlasBadge.textContent = content.badge;
  }

  if (atlasStamp) {
    atlasStamp.textContent = content.stamp;
  }

  if (atlasTitle) {
    atlasTitle.textContent = content.title;
  }

  if (atlasSummary) {
    atlasSummary.textContent = content.summary;
  }

  if (atlasPoemTitle) {
    atlasPoemTitle.textContent = content.poemTitle;
  }

  if (atlasPoemLine) {
    atlasPoemLine.textContent = content.poemLine;
  }

  renderList(atlasTags, content.tags);
  renderList(atlasPoints, content.points);

  atlasCards.forEach((card) => {
    const isActive = card.dataset.topic === topic;
    card.classList.toggle("is-active", isActive);
    card.setAttribute("aria-selected", String(isActive));
  });

  atlasTimelineButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.topic === topic);
  });
};

atlasCards.forEach((card) => {
  card.addEventListener("click", () => {
    applyAtlasTopic(card.dataset.topic);
  });
});

atlasTimelineButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyAtlasTopic(button.dataset.topic);
  });
});

applyAtlasTopic("court");

const audio = document.querySelector("#poetry-audio");
const audioStatus = document.querySelector("#audio-status");

if (audio && audioStatus) {
  audio.addEventListener("play", () => {
    audioStatus.textContent =
      "《阳关三叠》播放中：现在回读“劝君更尽一杯酒”，会更容易感到情绪的回环与延长。";
  });

  audio.addEventListener("pause", () => {
    audioStatus.textContent =
      "当前建议：先读诗，再点开音频，体会文字如何延长为乐声。";
  });

  audio.addEventListener("ended", () => {
    audioStatus.textContent =
      "音频已结束：可以回到《山居秋暝》，对比王维在“静观”与“送别”之间的不同节奏。";
  });
}
