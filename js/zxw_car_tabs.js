// ============================================
// 作者：张曦文
// 建立时间：2026-11-04 17:07
// 使用大模型：DeepSeek-V4.1-Flash
// 功能名称：新车选项卡复用脚本（最新上市 / 即将上市）
// ============================================

// 功能：张曦文 —— 清除容器内所有标签按钮与面板的选中状态
function zxw_clearActive(zxw_root) {
  var zxw_btns = zxw_root.querySelectorAll('.zxw_tab_btn');
  var zxw_panels = zxw_root.querySelectorAll('.zxw_panel');

  for (var zxw_i = 0; zxw_i < zxw_btns.length; zxw_i++) {
    zxw_btns[zxw_i].classList.remove('zxw_active');
  }
  for (var zxw_j = 0; zxw_j < zxw_panels.length; zxw_j++) {
    zxw_panels[zxw_j].classList.remove('zxw_active');
  }
}

// 功能：张曦文 —— 设置当前点击的标签按钮及其对应面板为选中状态
function zxw_setActive(zxw_root, zxw_btn) {
  var zxw_panelId = zxw_btn.getAttribute('data-zxw-tab');
  var zxw_panel = zxw_root.querySelector('#' + zxw_panelId);

  zxw_btn.classList.add('zxw_active');
  if (zxw_panel) {
    zxw_panel.classList.add('zxw_active');
  }
}

// 功能：张曦文 —— 为选项卡容器绑定点击监听：先清除全部选中态，再设置当前元素选中态
function zxw_bindTabs(zxw_root) {
  var zxw_btns = zxw_root.querySelectorAll('.zxw_tab_btn');

  for (var zxw_k = 0; zxw_k < zxw_btns.length; zxw_k++) {
    zxw_btns[zxw_k].addEventListener('click', function () {
      var zxw_container = this.parentNode.parentNode;

      // 第一步：先清除所有选项卡的选中状态
      zxw_clearActive(zxw_container);

      // 第二步：再设置当前元素的选中状态
      zxw_setActive(zxw_container, this);
    });
  }
}

// 功能：张曦文 —— 页面加载后自动初始化所有选项卡组件（可同时存在多个实例）
function zxw_initAllTabs() {
  var zxw_cards = document.querySelectorAll('.zxw_card');

  for (var zxw_m = 0; zxw_m < zxw_cards.length; zxw_m++) {
    zxw_bindTabs(zxw_cards[zxw_m]);
  }
}

// 功能：张曦文 —— 等待 DOM 解析完成后执行初始化
document.addEventListener('DOMContentLoaded', zxw_initAllTabs);
