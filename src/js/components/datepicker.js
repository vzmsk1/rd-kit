import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

// --------------------------------------------------------------------------

window.addEventListener('load', function () {
  const validateDateInp = inp => {
    return inp.value.length < 10;
  };

  // normal
  const dp1 = new AirDatepicker('[data-dp="v1"]', {
    container: document.querySelector('[data-dp="v1"]').parentElement,
    selectOtherMonths: false,
    monthsField: 'months',
    autoClose: true,
    inline: true,
    navTitles: {
      days: '<span class="air-datepicker-nav--title -group-">MMMM <i>yyyy</i></span>',
    },
    prevHtml:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 6L9.70711 11.2929C9.31658 11.6834 9.31658 12.3166 9.70711 12.7071L15 18" stroke="#1F232B" stroke-width="1.5" stroke-linecap="round"/></svg>',
    nextHtml:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="#1F232B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    position({ $datepicker }) {
      $datepicker.style.top = `calc(100% + 0.8rem)`;
    },
    onSelect: () => {
      dp1.$el.parentElement.classList.add('_filled');
      if (dp1.$el.parentElement.classList.contains('_error')) {
        dp1.$el.parentElement.classList.remove('_error');
      }
    },
  });

  // 2 nav buttons
  const dp2 = new AirDatepicker('[data-dp="v2"]', {
    container: document.querySelector('[data-dp="v2"]').parentElement,
    selectOtherMonths: false,
    monthsField: 'months',
    autoClose: true,
    inline: true,
    navTitles: {
      days: '<span class="air-datepicker-nav--text" data-show-months>MMMM</span> <span class="air-datepicker-nav--text" data-show-years>yyyy</span>',
      months:
        '<span class="air-datepicker-nav--text _active" data-show-months>MMMM</span> <span class="air-datepicker-nav--text" data-show-years>yyyy</span>',
      years:
        '<span class="air-datepicker-nav--text" data-show-months>MMMM</span> <span class="air-datepicker-nav--text _active" data-show-years>yyyy</span>',
    },
    prevHtml:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 6L9.70711 11.2929C9.31658 11.6834 9.31658 12.3166 9.70711 12.7071L15 18" stroke="#1F232B" stroke-width="1.5" stroke-linecap="round"/></svg>',
    nextHtml:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="#1F232B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    position({ $datepicker }) {
      $datepicker.style.top = `calc(100% + 0.8rem)`;
    },
    onSelect: () => {
      dp2.$el.parentElement.classList.add('_filled');
      if (dp2.$el.parentElement.classList.contains('_error')) {
        dp2.$el.parentElement.classList.remove('_error');
      }
    },
  });

  // range pick
  const dp3 = new AirDatepicker('[data-dp="v3"]', {
    container: document.querySelector('[data-dp="v3"]').parentElement,
    selectOtherMonths: false,
    monthsField: 'months',
    range: true,
    multipleDatesSeparator: ' - ',
    autoClose: true,
    inline: true,
    navTitles: {
      days: '<span class="air-datepicker-nav--title -group-">MMMM <i>yyyy</i></span>',
    },
    prevHtml:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 6L9.70711 11.2929C9.31658 11.6834 9.31658 12.3166 9.70711 12.7071L15 18" stroke="#1F232B" stroke-width="1.5" stroke-linecap="round"/></svg>',
    nextHtml:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="#1F232B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    position({ $datepicker }) {
      $datepicker.style.top = `calc(100% + 0.8rem)`;
    },
    onSelect: () => {
      dp3.$el.parentElement.classList.add('_filled');
      if (dp3.$el.parentElement.classList.contains('_error')) {
        dp3.$el.parentElement.classList.remove('_error');
      }
    },
  });

  // datepicker actions
  const setDpActions = dp => {
    if (dp) {
      document.addEventListener('click', function (e) {
        const target = e.target;

        if (target.closest('[data-show-months]')) {
          if (dp.currentView === 'months') {
            dp.setCurrentView('months');
          } else {
            dp.setCurrentView('days');
          }
        }
        if (target.closest('[data-show-years]')) {
          if (dp.currentView === 'years') {
            dp.setCurrentView('days');
          } else {
            dp.setCurrentView('years');
          }
        }
        if (
          !target.closest('[data-dp-btn]') &&
          !target.closest('.air-datepicker') &&
          !target.closest('.air-datepicker-nav--title') &&
          !target.closest('.air-datepicker-nav--text')
        ) {
          dp.$customContainer.classList.remove('_dp-show');
        }
        if (
          !target.closest('[data-dp-parent]') &&
          document.querySelector('[data-dp-parent]._focused')
        ) {
          document
            .querySelector('[data-dp-parent]._focused')
            .classList.remove('_focused');
        }
      });

      dp.$customContainer.addEventListener('click', function (e) {
        const target = e.target;

        dp.$customContainer.classList.add('_focused');
        dp.$customContainer.classList.remove('_error');

        if (target.closest('[data-dp-btn]')) {
          if (!dp.$customContainer.classList.contains('_dp-show')) {
            dp.$customContainer.classList.add('_dp-show');
            dp.$el.focus();
          } else {
            dp.$customContainer.classList.remove('_dp-show', '_focused');
            if (validateDateInp(dp.$el.value.length)) {
              dp.$customContainer.classList.add('_error');
            }
          }
        }
      });
    }
  };

  // init date input field
  const dpInputs = document.querySelectorAll('[data-dp]');

  const initDateField = inputs => {
    inputs.forEach(inp => {
      inp.addEventListener('input', function () {
        if (!/\d+/.test(inp.value)) inp.value = '';
      });
      inp.addEventListener('keyup', function (e) {
        if (e.keyCode < 47 || e.keyCode > 57) {
          e.preventDefault();
        }

        const len = inp.value.length;

        if (len !== 1 || len !== 3) {
          if (inp.keyCode == 47) {
            inp.preventDefault();
          }
        }

        if (len === 2) {
          inp.value += '.';
        }

        if (len === 5) {
          inp.value += '.';
        }

        if (len) {
          inp.parentElement.classList.add('_filled');
        } else {
          inp.parentElement.classList.remove('_filled');
        }
      });
      inp.addEventListener('paste', function (e) {
        e.preventDefault();
      });
      inp.addEventListener('focusout', function () {
        if (validateDateInp(inp)) {
          inp.parentElement.classList.add('_error');
        }
      });
    });
  };

  initDateField(dpInputs);

  // --------------------------------------------------------------------------

  setDpActions(dp1);
  setDpActions(dp2);
  setDpActions(dp3);
});
