<!-- React is a JavaScript library for building user interfaces.

## A Simple Component

React components implement a `render()` method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by `render()` via `this.props`.

```jsx
class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

root.render(<HelloMessage name='Taylor' />);
```

## Declarative

React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

A paragraph with _emphasis_ and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

- Lists
- [ ] todo
- [x] done

## Component-Based

Build encapsulated components that manage their own state, then compose them to make complex UIs.

Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.

## Learn Once, Write Anywhere

We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.

React can also render on the server using Node and power mobile apps using React Native.

![React Office desk](https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)

> The most important addition in React 18 is something we hope you never have to think about: concurrency. We think this is largely true for application developers, though the story may be a bit more complicated for library maintainers.

Concurrency is not a feature, per se. It’s a new behind-the-scenes mechanism that enables React to prepare multiple versions of your UI at the same time. You can think of concurrency as an implementation detail — it’s valuable because of the features that it unlocks. React uses sophisticated techniques in its internal implementation, like priority queues and multiple buffering. But you won’t see those concepts anywhere in our public APIs.

When we design APIs, we try to hide implementation details from developers. As a React developer, you focus on what you want the user experience to look like, and React handles how to deliver that experience. So we don’t expect React developers to know how concurrency works under the hood.

However, Concurrent React is more important than a typical implementation detail — it’s a foundational update to React’s core rendering model. So while it’s not super important to know how concurrency works, it may be worth knowing what it is at a high level.

A key property of Concurrent React is that rendering is interruptible. When you first upgrade to React 18, before adding any concurrent features, updates are rendered the same as in previous versions of React — in a single, uninterrupted, synchronous transaction. With synchronous rendering, once an update starts rendering, nothing can interrupt it until the user can see the result on screen.

In a concurrent render, this is not always the case. React may start rendering an update, pause in the middle, then continue later. It may even abandon an in-progress render altogether. React guarantees that the UI will appear consistent even if a render is interrupted. To do this, it waits to perform DOM mutations until the end, once the entire tree has been evaluated. With this capability, React can prepare new screens in the background without blocking the main thread. This means the UI can respond immediately to user input even if it’s in the middle of a large rendering task, creating a fluid user experience.

Another example is reusable state. Concurrent React can remove sections of the UI from the screen, then add them back later while reusing the previous state. For example, when a user tabs away from a screen and back, React should be able to restore the previous screen in the same state it was in before. In an upcoming minor, we’re planning to add a new component called `<Offscreen>` that implements this pattern. Similarly, you’ll be able to use Offscreen to prepare new UI in the background so that it’s ready before the user reveals it.

Concurrent rendering is a powerful new tool in React and most of our new features are built to take advantage of it, including Suspense, transitions, and streaming server rendering. But React 18 is just the beginning of what we aim to build on this new foundation. -->

<시놉시스>
“아파트는 주민의 것”

대지진으로 하루아침에 폐허가 된 서울.
모든 것이 무너졌지만 단 한 곳, 황궁아파트만은 그대로다.

소문을 들은 외부 생존자들이 황궁 아파트로 몰려들자
위협을 느끼기 시작하는 입주민들.
생존을 위해 하나가 된 그들은 새로운 주민 대표 ‘영탁’을 중심으로
외부인의 출입을 철저히 막아선 채 아파트 주민만을 위한 새로운 규칙을 만든다.

덕분에 지옥 같은 바깥 세상과 달리
주민들에겐 더없이 안전하고 평화로운 유토피아 황궁아파트.

하지만 끝이 없는 생존의 위기 속
그들 사이에서도 예상치 못한 갈등이 시작되는데...!

살아남은 자들의 생존 규칙
따르거나
떠나거나

<등장인물>
902호 - 영탁(이병헌)
602호 - 민성(박서준)
602호 - 명화(박보영)
903호 - 혜원(박지후)
809호 - 도균(김도윤)
1207호 - 금애(김선영)

<설정>
대지진
일반적인 포스트 아포칼립스물이 어딘가에는 멀쩡하게 작용하는 사회적 시스템이 있는 것을 묘사하는 경우가 있는 반면, 대규모 재난 직후를 다루는지라 말그대로 꿈도 희망도 없는 포스트 아포칼립스 물중에서도 끝판왕 수준의 암울한 설정으로 시작한다. 본 작품의 시발점이 되는 대재해. 단순히 땅이 흔들리고 갈라지는 수준이 아니라, 마치 하나의 파도처럼 지표면이 통째로 들렸다가 가라앉는 수준으로 묘사된다. 지각 자체가 수십 미터씩 들어 올려지는 듯한 묘사를 봤을 때 규모 10.0 이상에서 11.0까지로도 볼 수 있다. 이 정도면 단순 지진을 떠나 지각변동의 일종이라 봐도 손색이 없다. 영탁의 회상 신 중 지진 몇 시간 전에 쌍둥이자리 유성우에 대한 뉴스 언급이 나오는 것으로 보아 운석충돌의 가능성도 있으며[9], 작품 중후반 묘사에 따르면 한강도 지진의 여파로 말라버렸다고 한다. 또한 지진 직전의 일기 예보에서도 서울의 최저 기온이 관측 사상 기록된 적 없는 영하 26도로 예상된다고 나오는데, 이미 대지진 전부터 이상 저온을 넘어서는 소빙하기 수준의 대재해에 시달리고 있었던 것으로 추정된다.[10] 공식 시놉시스에서 서울 전체가 폐허가 되어버렸다고 서술되기 때문에 전국적으로 피해 규모가 어마어마할 것으로 보인다. 특히나 한국은 인구밀집도가 높고 대부분의 도시에 마천루가 즐비하다. 건물페허와 잔해때문에 뭔가를 발굴하고 찾는 것조차 매우 어려운 상황.

영화에선 서울 상황만 나오고 부산광역시, 광주광역시, 제주도 등 거리가 먼 지역이나 한국 밖 다른 나라들의 상태는 알려진 바가 없으나 아파트 주민 말로는 헬기나 비행기 하나 뜨는 걸 보지 못했다는 사실을 보면 최소한 다른 동아시아 국가들과 미국, 더 나아가서 유럽, 아프리카, 중동 같은 전 지구촌의 인류 문명이 붕괴한 듯하다. 건물 대부분이 붕괴했기 때문에 대도시, 특히 한국과 같이 마천루가 많은 국가는 더욱더 암울한 상황. 만약 수도권만 무너진 상태라면 남부 지방 지역 방송국이나 군부대 등이 보도와 구조를 위해 들어왔을 것이고, 한국 정도만 무너진 거라면 주변국에서 구조를 시도하거나 혹은 구조까진 하지 않아도 하늘에서 헬기나 비행기를 띄워서 재난 상황을 글로벌 뉴스로 보도했을 것이기 때문. 마찬가지로 한국 전체가 초토화되어서 비행체를 거의 볼 수 없는 상황에서, 외국의 구조헬기 또는 보도헬기가 목격되었다면 소문이 곧 서울 곳곳의 화제가 되었을 것이다. 하지만 영화 내내 영화상 몇 달의 시간이 흐를 동안 구조대도 취재진도 뉴스 장면도 나오지 않았다.

한반도 안에서만 발생한 재해라고 쳐도 UN 등의 외부 기관에서 재난으로 인한 위험지대에 접근하는 것을 통제하는 것일 수도 있다는 추측도 있으나, 이것은 전염병이나 쿠데타, 좀비사태와 같은 군사적 개입이 필요한 상황이 아닌 그냥 재난상황이다. 애초에 이런 국가급 재난에 다른 나라들이 멀쩡한 가운데 외부 개입이 전혀 없이 한반도를 철저히 방치한다는 것은 말이 안 되며, 재난물에선 이런 상황이 되면 으레 라디오로 상황을 판단하는 묘사가 나오는데[11] 그런 것도 없다. 한국 정도의 국가에서 이런 대처를 하지 못하고 멸망 수준에 다다르더라도, 일본이나 중국 혹은 UN 측에서 긴급 구호와 물자가 운송되어 상황을 재정비한다. 정황상 다른 국가도 이런 도움을 주지 못할 정도로 완전히 파괴되었다는 것을 의미한다. 오히려 어쨌든 생존자가 있는 한국의 상황이 그나마 나은 것일 수도 있다는 것이 엄청난 비극으로 다가온다.

일단 적어도 서울은 생지옥이 된 것이 확실한 게, 어렵게 집까지 찾아온 혜원이 아파트 밖, 서울의 경우 생지옥이 되었다고 언급했으며, 서울역 근처에 사람들이 모여산다는 얘기가 있으나,[12] 그게 희망적인지는 모르겠다고 한 걸 보면 범죄가 일상이 되어버린 듯하다. 아파트의 비교적 평화로운 모습에 낙관적이기보단 이질감을 느꼈다는 점이 그만큼 범죄가 벌어지는 무법지대에 익숙해졌음을 보여준다.

그리고 후속작 황야 시놉시스에서 전세계가 멸망한 것으로 확정나며 범지구적 재난임이 드러났다.#
황궁아파트 103동[13]
대지진이 일어나고 모든 건물이 붕괴된 가운데에서 유일하게 멀쩡한 아파트. 본 작품의 주요 장소이며, 런닝타임 내내 유일하게 멀쩡한 주거지인 이곳을 두고 아파트 주민들과 외부인들의 싸움이 계속된다. 아파트는 신축아파트[14][15]는 아니지만 서울에서 제법 살만한 아파트라서 재난 이전[16]에 돈을 모아서 힘들게 왔다는 부부가 나온다. 황궁아파트의 옆 단지인 드림팰리스 주민들이 황궁아파트 주민들을 단지에 발도 못 붙히게 하고 학군 섞이지 못하게 배척했다는 점 때문에 초반 주요 외부인들인 드림팰리스 주민을 고깝게 보고 있다. 아파트내 빈집이 많다고 하는데 지진 당시에 외출해 있다가 지진이 터져 돌아오지 않은 사람들의 빈집인 듯하며 외부인들은 처음에는 이런 빈집에서 살게 해달라고 요구하기도 했다.
외부인들
황궁아파트 103동 주민 명단에 등록되지 않은 모든 사람들. 아파트 주민들은 이들을 바퀴벌레라 부르며 멸시한다. 바퀴벌레라 부르게 된 이유는 방범대원들이 돌아다니던 중 방범대를 만나고 도망가는 노숙자들을 보고 바퀴벌레 같다고 부르기 시작하면서부터다. 작품 초반에 바퀴벌레가 대량으로 출몰하기도 했고 이후 일부 외부인이 몰래 아파트에 거주하고 있다는 사실[17]이 알려져서 마치 사람과 공존하는 혐오받는 생물인 바퀴벌레 같다는 의견이 생겨서다.
외부인들도 자신들을 배척하고 외부인 입장에서는 편안한 생활[18]을 영위하면서 방범대를 보내 물자를 약탈하는 아파트 주민들을 싫어해서 금니를 얻으러 밖에 나온 아파트 주민 한 명을 죽이고 아파트 주민들을 저주하는 내용을 적어놓기도 했다.
