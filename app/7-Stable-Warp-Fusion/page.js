'use client';

import { useState, useEffect } from 'react';
import styles from "../page.module.css";

export default function JTBCPage() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className={styles.container}>
      <div className={`${styles.topBanner} ${!isVisible ? styles.topBannerHidden : ''}`}>
        <a href="https://dzerof-home.vercel.app/" className={styles.bannerContent} style={{ textDecoration: 'none' }}>
          <span className={styles.greyGrade}>A+ A0 B+ B0 C+ C0 D+ </span>
          <span className={styles.whiteGrade}>D0 F</span>
        </a>
      </div>
      <main className={styles.main}>
        <div className={styles.titleGroup}>
          <h2 className={styles.title}>Stable Wrap Fusion</h2>
          <h3 className={styles.subtitle}>AI 영상 생성 과정 및 원리</h3>
        </div>
        <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Ff8579d37-fe3b-4de2-9d38-757142c91c98%2F230715_test(1)_control_sd15_openpose_000014.jpg?table=block&id=b2e50701-9107-405f-81ee-343c019df0ab&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Stable Warp Fusion" className={styles.contentImage} />

        <h2>서론</h2>
        <p className={styles.bodyText}>Stable Wrap Fusion은 AI를 활용한 이미지 생성 및 영상 제작 기술로, 다양한 스타일의 이미지를 생성하고 이를 합성하여 영상을 만드는 과정입니다. 이 보고서는 Stable Wrap Fusion을 구동하는 코드를 분석하고, AI 영상 생성 과정의 원리를 탐구합니다.</p>

        <h2>코드 분석</h2>

        <h3>설정값 및 파라미터 정의</h3>

        <pre className={styles.codeBlock}><code>
{`args = {
  'display_rate': display_rate,
  'n_batches': n_batches if animation_mode == 'None' else 1,
  'batch_size': batch_size,
  'batch_name': batch_name,
  'steps': steps,
  'diffusion_sampling_mode': diffusion_sampling_mode,
  'width_height': width_height,
  'clip_guidance_scale': clip_guidance_scale,
  'tv_scale': tv_scale,
  'range_scale': range_scale,
  'sat_scale': sat_scale,
  'cutn_batches': cutn_batches,
  'init_image': init_image,
  'init_scale': init_scale,
  'skip_steps': skip_steps,
  'side_x': side_x,
  'side_y': side_y,
  'timestep_respacing': timestep_respacing,
  'diffusion_steps': diffusion_steps,
  'animation_mode': animation_mode,
  'video_init_path': video_init_path,
  'extract_nth_frame': extract_nth_frame,
  'video_init_seed_continuity': video_init_seed_continuity,
  'key_frames': key_frames,
  'max_frames': max_frames if animation_mode != "None" else 1,
  'interp_spline': interp_spline,
  'start_frame': start_frame,
  'padding_mode': padding_mode,
  'text_prompts': text_prompts,
  'image_prompts': image_prompts,
  'intermediate_saves': intermediate_saves,
  'intermediates_in_subfolder': intermediates_in_subfolder,
  'steps_per_checkpoint': steps_per_checkpoint,
  'perlin_init': perlin_init,
  'perlin_mode': perlin_mode,
  'set_seed': set_seed,
  'clamp_grad': clamp_grad,
  'clamp_max': clamp_max,
  'skip_augs': skip_augs,
}
if frame_range not in [None, [0,0], '', [0], 0]:
  args['start_frame'] = frame_range[0]
  args['max_frames'] = min(args['max_frames'], frame_range[1])
args = SimpleNamespace(**args)

import traceback

gc.collect()
torch.cuda.empty_cache()

do_run()
print('n_stats_avg (mean, std): ', n_mean_avg, n_std_avg)

gc.collect()
torch.cuda.empty_cache()`}
        </code></pre>

        <p className={styles.bodyText}>
          <span className={styles.inlineCode}>display_rate:</span> 이미지가 화면에 표시되는 빈도<br />
          <span className={styles.inlineCode}>n_batches:</span> 생성할 배치 수<br />
          <span className={styles.inlineCode}>batch_size:</span> 배치의 크기<br />
          <span className={styles.inlineCode}>batch_name:</span> 배치의 이름<br />
          <span className={styles.inlineCode}>steps:</span> 이미지 생성 단계 수<br />
          <span className={styles.inlineCode}>diffusion_sampling_mode:</span> 샘플링 모드<br />
          <span className={styles.inlineCode}>width_height:</span> 이미지의 가로 세로 크기<br />
          <span className={styles.inlineCode}>clip_guidance_scale:</span> CLIP 가이던스 스케일<br />
          <span className={styles.inlineCode}>tv_scale</span>, <span className={styles.inlineCode}>range_scale</span>, <span className={styles.inlineCode}>sat_scale:</span> 이미지 품질 관련 스케일<br />
          <span className={styles.inlineCode}>cutn_batches:</span> 컷 배치 수<br />
          <span className={styles.inlineCode}>init_image:</span> 초기 이미지<br />
          <span className={styles.inlineCode}>init_scale:</span> 초기 이미지 스케일<br />
          <span className={styles.inlineCode}>skip_steps:</span> 스킵할 단계 수<br />
          <span className={styles.inlineCode}>side_x</span>, <span className={styles.inlineCode}>side_y:</span> 이미지의 측면 크기<br />
          <span className={styles.inlineCode}>timestep_respacing:</span> 시간 간격 재배치<br />
          <span className={styles.inlineCode}>diffusion_steps:</span> 확산 단계 수<br />
          <span className={styles.inlineCode}>animation_mode:</span> 애니메이션 모드<br />
          <span className={styles.inlineCode}>video_init_path:</span> 초기 비디오 경로<br />
          <span className={styles.inlineCode}>extract_nth_frame:</span> 추출할 프레임 수<br />
          <span className={styles.inlineCode}>video_init_seed_continuity:</span> 비디오 초기 시드 연속성<br />
          <span className={styles.inlineCode}>key_frames:</span> 키 프레임<br />
          <span className={styles.inlineCode}>max_frames:</span> 최대 프레임 수<br />
          <span className={styles.inlineCode}>interp_spline:</span> 보간 스플라인<br />
          <span className={styles.inlineCode}>start_frame:</span> 시작 프레임<br />
          <span className={styles.inlineCode}>padding_mode:</span> 패딩 모드<br />
          <span className={styles.inlineCode}>text_prompts:</span> 텍스트 프롬프트<br />
          <span className={styles.inlineCode}>image_prompts:</span> 이미지 프롬프트<br />
          <span className={styles.inlineCode}>intermediate_saves:</span> 중간 저장<br />
          <span className={styles.inlineCode}>intermediates_in_subfolder:</span> 하위 폴더에 중간 저장<br />
          <span className={styles.inlineCode}>steps_per_checkpoint:</span> 체크포인트 당 단계 수<br />
          <span className={styles.inlineCode}>perlin_init:</span> 펄린 초기화<br />
          <span className={styles.inlineCode}>perlin_mode:</span> 펄린 모드<br />
          <span className={styles.inlineCode}>set_seed:</span> 시드 설정<br />
          <span className={styles.inlineCode}>clamp_grad:</span> 그라디언트 클램프<br />
          <span className={styles.inlineCode}>clamp_max:</span> 최대 클램프<br />
          <span className={styles.inlineCode}>skip_augs:</span> 확장 스킵<br />
        </p>

        <h3>이미지 스타일 프롬프트</h3>
        <p className={styles.bodyText}>Stable Wrap Fusion에서는 사용자가 원하는 스타일을 텍스트로 입력하여 해당 스타일에 맞는 이미지를 생성할 수 있습니다. <span className={styles.inlineCode}>text_prompts</span> 파라미터를 통해 스타일 프롬프트를 설정할 수 있습니다. 예를 들어, 다음과 같이 스타일 프롬프트를 설정할 수 있습니다:</p>

        <pre className={styles.codeBlock}><code>
{`text_prompts = {
  0: ["Colorful, Juicy, Vibrant, Pinky, Neon"]
}`}
        </code></pre>

        <p className={styles.bodyText}>이 설정은 프레임 0에서 색이 풍부하고, 상큼하고, 쨍하고, 핑키하고, 네온 컬러가 들어간 이미지를 생성하도록 합니다.</p>

        <h3>이미지 스타일을 입히는 원리</h3>
        <p className={styles.bodyText}>텍스트 프롬프트를 기반으로 스타일을 입히는 과정은 다음과 같은 단계로 이루어집니다:</p>

        <ol className={styles.customList}>
          <li><strong>텍스트 인코딩:</strong> CLIP 모델을 사용하여 텍스트 프롬프트를 인코딩합니다. CLIP 모델은 텍스트와 이미지를 동일한 임베딩 공간으로 매핑하여 서로 간의 유사성을 계산할 수 있습니다.</li>
          <li><strong>스타일 적용:</strong> 인코딩된 텍스트 임베딩을 기반으로, 확산 모델(Diffusion Model)이 이미지에 해당 스타일을 적용합니다. 확산 모델은 노이즈가 포함된 상태에서 시작하여 점진적으로 노이즈를 제거하며, 최종적으로 스타일이 반영된 이미지를 생성합니다.</li>
          <li><strong>이미지 생성:</strong> 최종적으로 스타일이 반영된 이미지를 생성하여 출력합니다. 이 과정은 설정된 <span className={styles.inlineCode}>steps</span>와 <span className={styles.inlineCode}>clip_guidance_scale</span> 등의 파라미터에 따라 이미지 품질이 달라집니다.</li>
        </ol>

        <pre className={styles.codeBlock}><code>
{`def generate_image_with_style(text_prompts, model, diffusion, steps, clip_guidance_scale):
    # CLIP 모델을 사용하여 텍스트 프롬프트 인코딩
    text_inputs = clip.tokenize(text_prompts).to(device)
    text_features = model.encode_text(text_inputs)

    # 확산 모델 초기화
    init_image = torch.randn([1, 3, height, width], device=device)
    init_image.requires_grad_(True)

    optimizer = torch.optim.Adam([init_image], lr=0.1)

    for step in range(steps):
        # 노이즈 추가 및 제거 과정
        t = torch.tensor([step], device=device).float() / steps
        noisy_image = diffusion.q_sample(init_image, t)

        # CLIP 가이던스 적용
        image_features = model.encode_image(noisy_image)
        loss = clip_guidance_scale * torch.nn.functional.mse_loss(image_features, text_features)

        optimizer.zero_grad()
        loss.backward()
        optimizer.step()

        # 중간 이미지 출력
        if step % (steps // 10) == 0:
            save_image(noisy_image, f"output_step_{step}.png")

    final_image = init_image.detach().cpu().numpy()
    return final_image`}
        </code></pre>

        <p className={styles.bodyText}>이 코드는 CLIP 모델을 사용하여 텍스트 프롬프트를 인코딩하고, 인코딩된 텍스트 임베딩을 기반으로 확산 모델이 이미지를 생성하는 과정을 보여줍니다.</p>

        <h3>영상 생성</h3>
        <p className={styles.bodyText}>Stable Wrap Fusion의 영상 생성 과정은 여러 이미지를 합성하여 영상을 만드는 것입니다. 코드의 다음 부분이 영상 생성을 담당합니다:</p>

        <pre className={styles.codeBlock}><code>
{`import PIL
#@title ### **Create video**
#@markdown Video file will save in the same folder as your images`}
        </code></pre>

        <p className={styles.bodyText}>이 부분에서는 PIL(Python Imaging Library)을 사용하여 이미지를 불러오고, 이를 합성하여 영상을 만듭니다. 설정된 프레임 수와 보간 스플라인을 사용하여 자연스러운 영상이 생성됩니다.</p>

        <pre className={styles.codeBlock}><code>
{`def create_video(image_folder, video_name, frame_rate):
    images = [img for img in os.listdir(image_folder) if img.endswith(".png")]
    frame = cv2.imread(os.path.join(image_folder, images[0]))

    height, width, layers = frame.shape
    video = cv2.VideoWriter(video_name, cv2.VideoWriter_fourcc(*'DIVX'), frame_rate, (width, height))

    for image in images:
        video.write(cv2.imread(os.path.join(image_folder, image)))

    cv2.destroyAllWindows()
    video.release()`}
        </code></pre>

        <p className={styles.bodyText}>이 함수는 지정된 폴더에서 이미지를 불러와 영상으로 합성합니다.</p>

        <h3>설정 파일 비교</h3>
        <p className={styles.bodyText}>설정 파일을 비교하여 파라미터의 차이를 확인할 수 있는 부분입니다:</p>

        <pre className={styles.codeBlock}><code>
{`#@title Insert paths to two settings.txt files to compare

file1 = '' #@param {'type':'string'}
file2 = '' #@param {'type':'string'}

changes = []
added = []
removed = []

file1 = infer_settings_path(file1)
file2 = infer_settings_path(file2)

if file1 != '' and file2 != '':
  import json
  with open(file1, 'rb') as f:
    f1 = json.load(f)
  with open(file2, 'rb') as f:
    f2 = json.load(f)
  joint_keys = set(list(f1.keys())+list(f2.keys()))
  print(f'Comparing\\n{file1.split("/")[-1]}\\n{file2.split("/")[-1]}\\n')
  for key in joint_keys:
    if key in f1.keys() and key in f2.keys() and f1[key] != f2[key]:
      changes.append(f'{key}: {f1[key]} -> {f2[key]}')
    if key in f1.keys() and key not in f2.keys():
      removed.append(f'{key}: {f1[key]} -> <variable missing>')
    if key not in f1.keys() and key in f2.keys():
      added.append(f'{key}: <variable missing> -> {f2[key]}')

print('Changed:\\n')
for o in changes:
  print(o)

print('\\n\\nAdded in file2:\\n')
for o in added:
  print(o)

print('\\n\\nRemoved in file2:\\n')
for o in removed:
  print(o)`}
        </code></pre>

        <p className={styles.bodyText}>이 코드는 두 개의 설정 파일을 비교하여 차이점을 출력합니다. 설정 파일을 비교함으로써 파라미터 변경 사항을 확인할 수 있습니다.</p>

        <h3>알림 기능</h3>
        <p className={styles.bodyText}>이 부분에서는 코드 실행이 완료되었음을 알리기 위한 비프음을 재생하는 기능을 구현했습니다:</p>

        <pre className={styles.codeBlock}><code>
{`#@title Beep
beep = True #@param {'type':'boolean'}
if beep:
  if not is_colab:
    from IPython.display import Audio

    # Define the beep sound parameters
    duration = 1  # Duration of the beep sound in seconds
    freq = 440  # Frequency of the beep sound in Hz

    # Generate the beep sound
    beep_sound = 0.1 * np.sin(2 * np.pi * freq * np.arange(duration * 44100) / 44100)

    # Play the beep sound
    display.display(Audio(beep_sound, rate=44100, autoplay=True))

  if is_colab:
    from google.colab import output
    output.eval_js('new Audio("<https://upload.wikimedia.org/wikipedia/commons/0/05/Beep-09.ogg>").play()')`}
        </code></pre>

        <p className={styles.bodyText}>이 기능을 통해 사용자는 코드 실행 완료를 인지할 수 있습니다.</p>

        <h2>AI 영상 생성 과정</h2>

        <h3>파라미터 설정</h3>
        <p className={styles.bodyText}>앞서 언급한 다양한 파라미터를 설정하여 이미지 생성 및 영상 제작 환경을 구성합니다. 각 파라미터는 이미지와 영상의 품질, 크기, 스타일 등에 영향을 미칩니다.</p>

        <h3>이미지 생성</h3>
        <p className={styles.bodyText}>텍스트 및 이미지 프롬프트를 사용하여 다양한 스타일의 이미지를 생성합니다. 스타일 단어를 입력하면 해당 스타일에 맞는 이미지가 생성됩니다. 이 과정에서는 CLIP 가이던스와 확산 모델을 활용하여 고품질 이미지를 생성합니다. 예를 들어, <span className={styles.inlineCode}>text_prompts</span>에 "Colorful, Juicy, Vibrant, Pinky, Neon”를 입력하면 색이 풍부하고, 상큼하고, 쨍하고, 핑키하고, 네온 컬러가 들어간 이미지가 생성됩니다.</p>

        <p className={styles.bodyText}>이미지 생성 과정은 다음과 같은 단계로 이루어집니다:</p>

        <ol className={styles.customList}>
          <li><strong>텍스트 프롬프트 인코딩:</strong> CLIP 모델을 사용하여 텍스트 프롬프트를 인코딩합니다.</li>
          <li><strong>이미지 초기화:</strong> 노이즈가 포함된 초기 이미지를 생성합니다.</li>
          <li><strong>이미지 업데이트:</strong> 각 단계에서 노이즈를 점진적으로 제거하고, CLIP 가이던스를 적용하여 텍스트 프롬프트와 일치하는 이미지를 생성합니다.</li>
        </ol>

        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Fc921d0a6-0ca8-4b76-92e5-221c8eb1c4f1%2FScreenshot_2024-07-13_at_10.42.27_PM.png?table=block&id=c9352769-708f-4451-ace8-48bcfb48020c&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="오리지널 이미지" className={styles.contentImage} />
          <figcaption>오리지널 이미지</figcaption>
        </figure>

        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F92f2bde0-517c-4a3f-a535-8caf3658553d%2FScreenshot_2024-07-13_at_10.46.50_PM.png?table=block&id=bfb4ccc1-1363-400a-ad83-d0da56935446&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="피사체 분리 과정" className={styles.contentImage} />
          <figcaption>피사체 분리 과정</figcaption>
        </figure>

        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2Fd634a6be-fefb-4546-83d7-7cdc01948016%2FScreenshot_2024-07-13_at_10.12.05_PM.png?table=block&id=af4af434-cc2f-4f56-9785-3e3ba0da235e&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="Colorful, Juicy, Vibrant, Pinky, Neon" className={styles.contentImage} />
          <figcaption>Colorful, Juicy, Vibrant, Pinky, Neon</figcaption>
        </figure>

        <h3>세분화 : 일반적인 필터와의 차이점</h3>
        <p className={styles.bodyText}>스타일을 적용할 때, 필터를 입히는 것이 아닌 피사체를 분리하여 그 피사체에 스타일을 적용합니다. 이는 기존의 색깔 필터만 입히는 것과는 차이가 있습니다. 다음은 피사체 분리 과정입니다.</p>

        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F3017493e-dcf5-4ff0-9b1b-a0859c473174%2F230715_test(0)_control_sd15_softedge_000000.jpg?table=block&id=6c495fb7-5a2c-4e68-a4d9-9bca2a2a1665&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="피사체 분리 과정 1" className={styles.contentImage} />
        </figure>

        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F97e4cfa9-b875-4c01-9b78-8f336ce00322%2F230715_test(1)_control_sd15_openpose_000000.jpg?table=block&id=5bab11b7-2dbe-45de-a48e-511ce72a7926&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="피사체 분리 과정 2" className={styles.contentImage} />
        </figure>

        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F96497d4c-54d2-407b-89ec-ebf65350984e%2F230715_test(1)_control_sd15_normalbae_000003.jpg?table=block&id=c45c5a45-0d58-4d19-a2e2-faf1dd971703&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="피사체 분리 과정 3" className={styles.contentImage} />
        </figure>

        <figure>
          <img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fbd3fd748-abfb-453d-a988-56268eecc1cb%2F25709a2d-9a56-4262-8a45-88d7abe31654%2F230715_test(1)_control_sd15_inpaint_000001.jpg?table=block&id=c92b9b55-6acd-4e26-83f1-728be41b111b&spaceId=bd3fd748-abfb-453d-a988-56268eecc1cb&width=2000&userId=c5a21a5c-bcab-4789-a4d7-b09c43662fb2&cache=v2" alt="피사체 분리 과정 4" className={styles.contentImage} />
        </figure>

        <h3>이미지 합성</h3>
        <p className={styles.bodyText}>생성된 이미지들을 연속적으로 합성하여 영상을 만듭니다. 설정된 프레임 수와 보간 스플라인을 사용하여 자연스러운 영상이 생성됩니다. 예를 들어, 다음 코드는 이미지를 영상으로 합성하는 과정을 보여줍니다:</p>

        <pre className={styles.codeBlock}><code>
{`def create_video(image_folder, video_name, frame_rate):
    images = [img for img in os.listdir(image_folder) if img.endswith(".png")]
    frame = cv2.imread(os.path.join(image_folder, images[0]))

    height, width, layers = frame.shape
    video = cv2.VideoWriter(video_name, cv2.VideoWriter_fourcc(*'DIVX'), frame_rate, (width, height))

    for image in images:
        video.write(cv2.imread(os.path.join(image_folder, image)))

    cv2.destroyAllWindows()
    video.release()`}
        </code></pre>

        <p className={styles.bodyText}>이 과정에서 프레임 간의 연속성을 유지하기 위해 보간 기법을 적용합니다.</p>

        <h3>영상 저장</h3>
        <p className={styles.bodyText}>최종적으로 <a href="https://youtu.be/OQsWEN9Uri0" className={styles.hyperlink}>생성된 영상</a>을 저장합니다. 영상은 설정된 경로에 저장되며, 필요한 경우 중간 단계의 이미지를 저장하여 과정 중간 결과를 확인할 수 있습니다. 저장된 영상은 사용자가 원하는 프레임 속도와 해상도로 설정할 수 있습니다.</p>

        <h2>결론</h2>
        <p className={styles.bodyText}>Stable Wrap Fusion은 AI를 활용하여 다양한 스타일의 이미지를 생성하고 이를 합성하여 영상을 만드는 강력한 도구입니다. 이 보고서를 통해 Stable Wrap Fusion의 코드를 분석하고, AI 영상 생성 과정의 원리를 이해할 수 있었습니다. 설정값과 파라미터의 중요성을 인지하고, 텍스트 및 이미지 프롬프트를 활용하여 원하는 스타일의 이미지를 생성할 수 있습니다. 이를 통해 다양한 응용 가능성을 탐구할 수 있을 것입니다.</p>
        <p className={styles.bodyText}><a href="https://www.youtube.com/watch?app=desktop&feature=shared&v=Ac9U1kyqMp0" className={styles.hyperlink}>* JTBC 뉴스룸에서 관련된 인터뷰를 진행했습니다.</a></p>
      </main>
    </div>
  );
}
