# INK_Alert

## 목차

- [프로젝트 설명](#프로젝트-설명)
- [사용법](#사용법)
- [라이선스](#라이선스)

## 프로젝트 설명

시스템 Alert 창은 브라우저 및 디바이스마다 다르게 시스템 디자인을 따라 표출됨에 따라
사이트 내의 디자인 컨셉에 이질감을 주는 것을 일괄적으로 표출 할 수 있도록 하기 위해 개발되었습니다.

Javascript로 alert창을 사용하는 것과 동일하게 사용할 수 있으며,
then을 이용한 후처리도 가능합니다.

별도의 Stylesheet를 제공하지 않고 CSS in JS로 옵션값에 의해 유동적으로 활용할 수 있도록 개발했습니다.

또한, 성능 및 경량화에 중점을 두어 최소한의 코드로만 구성되어 있습니다.

<div align="left">
  	<img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat&logo=javascript&logoColor=white" />
</div>


## 사용법

link 코드와 함께 Class를 추가 입력하는 것으로 적용됩니다.

```sh
    // ink_alert
    <script src="./ink_alert/ink_alert.js"></script>

    // ink_alert js
    document.getElementById("alert").addEventListener("click", () => {
      // alert
      InkAlert.alert({
        title: "Alert",
        text: "시스템 Alert 대체 라이브러리",
        option_pack: options
      });
    });
```

가이드 사이트를 통하여 코드를 확인하고 바로 적용하여 추가적인 디자인 코드 작업을 진행할 수 있습니다.

더 많은 정보는 <a href="http://ink.pe.kr/ink_guide">http://ink.pe.kr/</a>에서 확인할 수 있습니다.

## 라이선스
모두가 원하는대로 무엇이든 할 수 있습니다.
다만, 출처만 남겨주세요.

Everyone can do whatever they want.
However, please leave only the source.


- **변경 내역** :
-2024-02-15 : 초기 작성

- **크레딧** : INK - ODG

- **FAQ** : lubiallu@naver.com
