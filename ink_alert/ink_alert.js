class InkAlert {
  constructor(options) {
    // 옵션 설정값 - 초기화
    (this.option_pack = options.option_pack || {}),
      (this.type = options.type || ""),
      (this.title = options.title || "제목을 입력하세요."),
      (this.title_font_size = options.title_font_size || ""),
      (this.title_font_weight = options.title_font_weight || ""),
      (this.text = options.text || "내용을 입력하세요."),
      (this.text_font_size = options.text_font_size || ""),
      (this.text_font_weight = options.text_font_weight || ""),
      (this.icon = options.icon || ""),
      (this.icon_size = options.icon_size || ""),
      (this.contents_align = options.contents_align || ""),
      (this.check_button_bg_color = options.check_button_bg_color || ""),
      (this.check_button_text_color = options.check_button_text_color || ""),
      (this.check_button_text = options.check_button_text || "확인"),
      (this.confirm_button_bg_color = options.confirm_button_bg_color || ""),
      (this.confirm_button_text_color = options.confirm_button_text_color || ""),
      (this.confirm_button_text = options.confirm_button_text || "확인"),
      (this.cancel_button_bg_color = options.cancel_button_bg_color || ""),
      (this.cancel_button_text_color = options.cancel_button_text_color || ""),
      (this.cancel_button_text = options.cancel_button_text || "취소"),
      (this.button_font_size = options.button_font_size || "14px"),
      (this.button_font_weight = options.button_font_weight || "bold"),
      (this.button_sort_reverse = options.button_sort_reverse || false),
      (this.button_full_mode = options.button_full_mode || false),
      (this.button_list_mode = options.button_list_mode || false),
      (this.button_align = options.button_align || ""),
      (this.custom_style = options.custom_style || ""),
      (this.style_sheet = document.createElement("style"));

    // 옵션 팩 적용
    Object.entries(this.option_pack).forEach(([key, value]) => {
      if (value) {
        this[key] = value;
      }
    });

    // 색상 코드 필터 적용
    const check_button_text_color = this.type_filter(this.check_button_text_color, "string")? this.color_filter(this.check_button_text_color)? this.check_button_text_color : "#ffffff" : "#ffffff";
    const check_button_bg_color = this.type_filter(this.check_button_bg_color, "string")? this.color_filter(this.check_button_bg_color)? this.check_button_bg_color : "#000000" : "#000000";
    const confirm_button_text_color = this.type_filter(this.confirm_button_text_color, "string")? this.color_filter(this.confirm_button_text_color)? this.confirm_button_text_color : "#ffffff" : "#ffffff";
    const confirm_button_bg_color = this.type_filter(this.confirm_button_bg_color, "string")? this.color_filter(this.confirm_button_bg_color)? this.confirm_button_bg_color : "#009bef" : "#009bef";
    const cancel_button_text_color = this.type_filter(this.cancel_button_text_color, "string")? this.color_filter(this.cancel_button_text_color)? this.cancel_button_text_color : "#ffffff" : "#ffffff";
    const cancel_button_bg_color = this.type_filter(this.cancel_button_bg_color, "string")? this.color_filter(this.cancel_button_bg_color)? this.cancel_button_bg_color : "#666666" : "#666666";
    
    
    // 스타일시트에 CSS 추가
    this.style_sheet.innerHTML = `
      .ink_alert_window_wrap {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 100000;
        display: flex; 
        width: 100vw;
        height: 100vh;
        background-color: rgba(0,0,0,0.5);
        justify-content: center;
        align-items: center;
      }
      .ink_alert_window {
        display: flex;
        flex-direction: column;
        width: calc(100% - 80px);
        max-width: 320px;
        height: auto;
        padding: 20px;
        gap: 10px;
        background-color: #fff;
        font-size: 14px;
        border-radius: 10px;
        box-sizing: border-box;
        box-shadow: 0 0 5px 5px rgba(0,0,0,0.1);
      }
      .ink_alert_icon {
        display: flex;
        width: ${this.icon_size? this.icon_size : "80px"};
        height: ${this.icon_size? this.icon_size : "80px"};
        padding: 0;
        margin: 0 auto;
        background-image: url(${this.icon? this.icon : ""});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
      }
      .ink_alert_title {
        display: flex;
        width: 100%;
        height: auto;
        padding: 0;
        margin: 0;
        font-size: ${this.title_font_size? this.title_font_size: "1.6em"};
        font-weight: ${this.title_font_weight? this.title_font_weight: "bold"};
        justify-content: ${this.contents_align ? this.contents_align : "center"};
        align-items: center;
        text-align: ${this.contents_align ? this.contents_align : "center"};
        box-sizing: border-box;
      }
      .ink_alert_text {
        display: flex;
        width: 100%;
        height: auto;
        padding: 0;
        margin: 0;
        font-size: ${this.text_font_size? this.text_font_size: "1em"};
        font-weight: ${this.text_font_weight? this.text_font_weight: "500"};
        justify-content: ${this.contents_align ? contents_align : "center"};
        align-items: center;
        text-align: ${this.contents_align ? contents_align : "center"};
        box-sizing: border-box;
      }
      .ink_alert_btn_wrap {
        display: flex;
        flex-direction: ${this.button_sort_reverse ? "row-reverse" : "row"};
        justify-content: ${this.button_align != "" && this.button_list_mode ? "right" : this.button_align ? this.button_align : "center"};
        align-items: center;
        width: 100%;
        height: auto;
        gap: 10px;
        margin-top: 10px;
        box-sizing: border-box;
      }
      .ink_alert_btn {
        flex: ${this.button_full_mode ? 1 : 0} 1 ${this.button_list_mode ? "auto" : "140px"};
        display: flex;
        justify-content: center;
        align-items: center;
        width: auto;
        height: auto;
        font-size: ${this.button_font_size};
        font-weight: ${this.button_font_weight};
        white-space: nowrap;
        padding: 10px;
        background-color: transparent;
        border: 0;
        border-radius: 5px;
        cursor: pointer;
        box-sizing: border-box;
        transition: all 0.25s ease;
      }
      .ink_alert_btn:hover,
      .ink_alert_btn:focus {
        box-shadow: 0 0 10px rgba(0,0,0,0.2);
      }
      .ink_alert_btn:active {
        box-shadow: inset 0 0 10px rgba(0,0,0,0.2);
      }
      .ink_alert_check_btn {color: ${check_button_text_color}; background-color: ${check_button_bg_color};}
      .ink_alert_confirm_btn {color: ${confirm_button_text_color}; background-color: ${confirm_button_bg_color};}
      .ink_alert_cancel_btn {color: ${cancel_button_text_color}; background-color: ${cancel_button_bg_color};}
    `;

    // 백그라운드 정의
    this.alert_window_wrap = document.createElement("div");
    this.alert_window_wrap.classList.add("ink_alert_window_wrap");
    // 요소 정의
    this.alert_window = document.createElement("div");
    this.alert_window.classList.add("ink_alert_window");
    // 버튼 랩 정의
    this.alert_btn_wrap = document.createElement("div");
    this.alert_btn_wrap.classList.add("ink_alert_btn_wrap");
  }

  // 옵션/입력 값 타입 필터
  type_filter(value, type) {
    if (typeof value !== type) {
      console.error(`type is not ${type} of ${value}`);
      return false;
    }
    if (value) return true;
  }

  // 색상 코드 값 필터
  color_filter(color, debug = false) {
    const color_code = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    if (!color_code.test(color) && !debug) {
      console.error(`${color} is not color code`);
      return;
    }
    if (color) return true;
  }

  // 버튼 색상
  set_btn_color(style_sheet, btn_name, btn_text_color, btn_bg_color) {
    // 색상 초기화
    btn_text_color = btn_text_color != ""? btn_text_color : "#000";
    btn_bg_color = btn_bg_color != ""? btn_bg_color : "transparent";

    if (this.type_filter(btn_text_color, "string") && this.type_filter(btn_bg_color, "string")) {
      // 색상 값 스타일시트에 추가
      if (this.color_filter(btn_text_color) && this.color_filter(btn_bg_color)) {
        style_sheet.innerHTML += `
          .ink_alert_${btn_name}_btn {color: ${btn_text_color}; background-color: ${btn_bg_color};}
        `;
      }
      return;
    }
  }

  // 중복 생성 방지
  is_wrap_exist(){
    const ink_alert_window_wrap = document.querySelector(".ink_alert_window_wrap");
    return document.body.contains(ink_alert_window_wrap)? true : false;
  }

  // 초기화
  static init(options) {
    // 옵션 값 적용
    const init = new InkAlert(options);

    // 타입
    Element.prototype.set_type = function (type) {
      if (init.type_filter(type, "string")) return this.classList.add(type);
    };
    // 제목
    Element.prototype.set_title = function (title) {
      if (init.type_filter(title, "string")) {
        return (this.innerHTML += `
      <span class="ink_alert_title">${title}</span>
    `);
      }
    };

    // 내용
    Element.prototype.set_text = function (text) {
      if (init.type_filter(text, "string")) {
        return (this.innerHTML += `
      <span class="ink_alert_text">${text}</span>
    `);
      }
    };

    // 아이콘
    Element.prototype.set_icon = function (icon) {
      if (init.type_filter(icon, "string")) {
        return (this.innerHTML += `
      <span class="ink_alert_icon"></span>
    `);
      }
    };

    // 버튼 내용
    Element.prototype.add_btn = function (btn_type, btn_text, event_functions) {
      if (init.type_filter(btn_text, "string")) {
        if (btn_type && btn_text) {
          // 버튼 생성
          const btn = document.createElement("button");
          btn.addEventListener("click", event_functions);
          btn.classList.add("ink_alert_btn", `ink_alert_${btn_type}_btn`);
          btn.innerText = btn_text;
          // 버튼 추가
          return this.appendChild(btn);
        }
      }
    };

    // 커스텀 스타일
    Element.prototype.set_style = function (style_sheet, custom_style) {
      if (init.type_filter(custom_style, "string")) {
        style_sheet.innerHTML += custom_style;
      }
    };

    // 스타일시트 정의
    this.style_sheet = init.style_sheet;
    // 백그라운드 정의
    this.alert_window_wrap = init.alert_window_wrap;
    // 요소 정의
    this.alert_window = init.alert_window;

    // 버튼 정의
    this.alert_btn_wrap = init.alert_btn_wrap;

    // 내용 적용
    this.alert_window.set_type(init.type);
    this.alert_window.set_icon(init.icon);
    this.alert_window.set_title(init.title);
    this.alert_window.set_text(init.text);
    this.alert_window.set_style(this.style_sheet, init.custom_style);

  }

  // 표출
  static alert(options) {
    return new Promise((resolve, reject) => {
      // 옵션 값 적용
      const option = new InkAlert(options);
      this.init(options);

      // 스타일시트 정의
      const style_sheet = this.style_sheet;
      // 백그라운드 정의
      const alert_window_wrap = this.alert_window_wrap;
      // 요소 정의
      const alert_window = this.alert_window;
      // 버튼 랩 정의
      const alert_btn_wrap = this.alert_btn_wrap;

      // 승인처리 = alert은 true를 반환
      function accept() {
        destroy();
        resolve(true);
      }

      // 요소 삭제
      function destroy() {
        style_sheet.remove();
        alert_window_wrap.remove();
      }

      // 버튼 적용
      // option.set_btn_color(style_sheet , "check", option.check_button_text_color, option.check_button_bg_color);
      alert_btn_wrap.add_btn("check", option.check_button_text, accept);

      // 결과물 적용
      // 스타일시트를 문서의 head 요소에 추가(생성)
      document.head.appendChild(style_sheet);
      // alert을 wrap요소에 추가(생성)
      alert_window_wrap.appendChild(alert_window);
      // alert 버튼 wrap 요소 추가
      alert_window.appendChild(alert_btn_wrap);

      // alert_window_wrap을 body 요소에 추가(생성)
      if (!option.is_wrap_exist()) document.body.appendChild(alert_window_wrap);
    });
  }

  // 컨펌 표출
  static confirm(options) {
    return new Promise((resolve, reject) => {
      // 옵션 값 적용
      const option = new InkAlert(options);
      this.init(options);

      // 스타일시트 정의
      const style_sheet = this.style_sheet;
      // 백그라운드 정의
      const alert_window_wrap = this.alert_window_wrap;
      // 요소 정의
      const alert_window = this.alert_window;
      // 버튼 랩 정의
      const alert_btn_wrap = this.alert_btn_wrap;

      // 승인처리
      function accept() {
        destroy();
        resolve(true);
      }

      // 닫기/취소처리
      function cancel() {
        destroy();
        resolve(false);
      }

      // 요소 삭제
      function destroy() {
        style_sheet.remove();
        alert_window_wrap.remove();
      }

      // 버튼 적용
      // 승인 버튼
      // option.set_btn_color(style_sheet, "confirm", option.confirm_button_text_color, option.confirm_button_bg_color);
      alert_btn_wrap.add_btn("confirm", option.confirm_button_text, accept);
      // 취소 버튼
      // option.set_btn_color(style_sheet, "cancel", option.cancel_button_text_color, option.cancel_button_bg_color);
      alert_btn_wrap.add_btn("cancel", option.cancel_button_text, cancel);

      // 결과물 적용
      // 스타일시트를 문서의 head 요소에 추가(생성)
      document.head.appendChild(style_sheet);
      // alert을 wrap요소에 추가(생성)
      alert_window_wrap.appendChild(alert_window);
      // alert 버튼 wrap 요소 추가
      alert_window.appendChild(alert_btn_wrap);

      // alert_window_wrap을 body 요소에 추가(생성
      if (!option.is_wrap_exist()) document.body.appendChild(alert_window_wrap);
    });
  }
}
