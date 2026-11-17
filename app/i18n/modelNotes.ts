/**
 * One-line notes that the engine sends with its models, in the window's own
 * language.
 *
 * The notes are written where the models are described - in the Rust service -
 * so that an agent reading `models_catalog` gets a sentence in English. The
 * window would then show that English sentence under a Chinese heading, which
 * is the one place the interface speaks two languages at once. The note is
 * matched by its English text and read from here in the window's language; a
 * note this file does not know is shown as the service sent it, so a model
 * added later never loses its description.
 */

import type { Language } from './translations';

const zh: Record<string, string> = {
  "Runs HT-Demucs, MuScriptor and SheetSage2: audio.cpp's server, as Speech Studio and Dub Studio run it.":
    '运行 HT-Demucs、MuScriptor 和 SheetSage2：audio.cpp 的服务端，Speech Studio 与 Dub Studio 也这样用。',
  "The transforms audio.cpp's CUDA 13 build computes with.":
    'audio.cpp 的 CUDA 13 版用来计算的变换库。',
  "The CUDA 12.9 libraries audio.cpp's CUDA 12 build computes with.":
    'audio.cpp 的 CUDA 12 版用来计算的 CUDA 12.9 库。',
  'Part of the CUDA 13 server.': 'CUDA 13 服务端的一部分。',
  'Part of the CUDA 12 server.': 'CUDA 12 服务端的一部分。',
  'The lighter of the two: quantisation-aware training keeps it usable at q4_0.':
    '两者中较轻的一个：量化感知训练让它在 q4_0 下依然可用。',
  'The lighter of the two; quantisation-aware training keeps it usable at q4_0.':
    '两者中较轻的一个：量化感知训练让它在 q4_0 下依然可用。',
  'Writes noticeably better captions; wants a card that is not already full of the music engine.':
    '写出的描述明显更好；需要一张没被音乐引擎占满的显卡。',
  'Writes noticeably better captions; wants a card that is not already full of Music3.':
    '写出的描述明显更好；需要一张没被音乐引擎占满的显卡。',
  'More accurate than q4_0, and it wants a card with room to spare.':
    '比 q4_0 更准确，需要显卡还有余量。',
  'Closer again to the full model.': '更接近完整模型。',
  'As close to the original as a quantisation gets. For a card that has nothing else to do.':
    '量化能达到的最接近原版的程度，适合没有别的任务的显卡。',
  'Needs the CUDA runtime companion below.': '需要下方配套的 CUDA 运行库。',
  'The CUDA libraries llama.cpp links against.': 'llama.cpp 链接的 CUDA 库。',
  'For cards and drivers CUDA 13 does not run: GTX 900 and 10, Tesla V100, drivers before 580. Needs the CUDA runtime companion below.':
    '供 CUDA 13 不支持的显卡和驱动使用：GTX 900 与 10 系列、Tesla V100、580 之前的驱动。需要下方配套的 CUDA 运行库。',
  'The CUDA 12 libraries llama.cpp links against.': 'llama.cpp 链接的 CUDA 12 库。',
  'For AMD and Intel cards, and NVIDIA cards CUDA does not run on: the card through Vulkan.':
    '供 AMD 和 Intel 显卡，以及 CUDA 跑不了的 NVIDIA 显卡使用：通过 Vulkan 用显卡。',
  'For machines without a graphics card, or for choosing the processor. Slow, but it works.':
    '供没有显卡的电脑使用，也可以用来选择处理器。慢，但能用。',
  'For machines without an NVIDIA card. Slow, but it works.':
    '供没有 NVIDIA 显卡的电脑使用。慢，但能用。',
  "Runs on the Mac's own graphics through Metal, in the memory it shares with the processor.":
    '在 Mac 上用 Metal 走自带的显卡，使用与处理器共享的内存。',
  "A YuE2 fine-tune of the community, sung in place of the set's model.":
    '社区微调的 YuE2，用它替代所选套装的模型来演唱。',
  "The linear algebra the engine's CUDA backend is linked against. Without it the engine cannot start at all.":
    '引擎的 CUDA 后端所链接的线性代数库。缺少它引擎根本无法启动。',
  "The linear algebra of the engine's CUDA 12 backend, for cards CUDA 13 dropped and older drivers.":
    '引擎 CUDA 12 后端的线性代数库，供 CUDA 13 已放弃的显卡和较旧的驱动使用。',
  "The CUDA runtime of the engine's CUDA 13 backend and of the audio.cpp server.":
    '引擎 CUDA 13 后端和 audio.cpp 服务端所用的 CUDA 运行库。',
  "The linear algebra of the engine's CUDA 13 backend and of the audio.cpp server.":
    '引擎 CUDA 13 后端和 audio.cpp 服务端所用的线性代数库。',
  "The CUDA runtime of the engine's CUDA 12 backend and of the audio.cpp server.":
    '引擎 CUDA 12 后端和 audio.cpp 服务端所用的 CUDA 运行库。',
  "The linear algebra of the engine's CUDA 12 backend and of the audio.cpp server.":
    '引擎 CUDA 12 后端和 audio.cpp 服务端所用的线性代数库。',
  'Whisper large-v3 turbo trained for verbatim word timings, in audio.cpp: what karaoke and the dataset lyrics are heard with.':
    '在 audio.cpp 中训练用于逐字时间轴（逐字不差）的 Whisper large-v3 turbo：卡拉OK 与数据集歌词都用它来听。',
  "NVIDIA's recogniser, the one Dub Studio uses: 25 European languages, the time of each word.":
    'NVIDIA 的识别器，Dub Studio 用的就是它：25 种欧洲语言，给出每个词的时间。',
  "Moondream's post-trained Parakeet v3: fewer wrong words in Russian and in noise.":
    'Moondream 后期训练的 Parakeet v3：俄语和嘈杂环境下错词更少。',
  'Runs Parakeet on an NVIDIA card.': '在 NVIDIA 显卡上运行 Parakeet。',
  'Runs Parakeet on an NVIDIA card CUDA 13 does not run - Maxwell to Volta, or a driver older than 580.':
    '在 CUDA 13 跑不了的 NVIDIA 显卡上运行 Parakeet：Maxwell 到 Volta，或 580 之前的驱动。',
  'Runs Parakeet on an AMD or Intel card, or an NVIDIA card CUDA does not run on.':
    '在 AMD 或 Intel 显卡上运行 Parakeet，或用在 CUDA 跑不了的 NVIDIA 显卡上。',
  'Runs Parakeet on the processor: slower, the same words.':
    '在处理器上运行 Parakeet：更慢，识别的词一样。',
  'Runs Parakeet on the Mac: Metal on Apple silicon, the processor on Intel.':
    '在 Mac 上运行 Parakeet：Apple 芯片走 Metal，Intel 芯片走处理器。',
  'The tempo model runs on this, on the processor; it is loaded at run time, not linked in.':
    '节奏模型在处理器上用它运行；运行时加载，不参与链接。',
  'CC BY-NC 4.0: for non-commercial use.': 'CC BY-NC 4.0：仅限非商业使用。',
  "Restores music compressed to MP3: removes the artefacts of compression, 44.1 kHz, the channels kept. Apollo (JusperLee), weights CC BY-SA 4.0, runs on audio.cpp's server.":
    '修复被压缩成 MP3 的音乐：去掉压缩痕迹，44.1 kHz，保留原声道。Apollo（JusperLee），权重 CC BY-SA 4.0，在 audio.cpp 的服务端运行。',
  'Six stems: drums, bass, other, vocals, guitar, piano. MIT-licensed, runs on audio.cpp\'s server.':
    '六条分轨：鼓、贝斯、其他、人声、吉他、钢琴。MIT 许可，在 audio.cpp 的服务端运行。',
  "The vocals and the rest, cleaner than HT-Demucs: Dub Studio's separator, run by BSRoformer.cpp.":
    '人声与其余部分，比 HT-Demucs 更干净：Dub Studio 的分离器，由 BSRoformer.cpp 运行。',
};

const catalogue: Partial<Record<Language, Record<string, string>>> = { zh };

/**
 * The note in the window's language, or the note itself when this file has
 * nothing better to offer (English and the other languages keep the service's
 * wording).
 */
export const localizeModelNote = (note: string, language: Language): string => {
  const table = catalogue[language];
  if (!table) return note;
  return table[note.trim()] ?? note;
};
