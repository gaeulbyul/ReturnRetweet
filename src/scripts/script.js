// 미국 대선: 2020년 11월 3일
const USA_VOTE = 1605000000000

if (document.getElementById('react-root') && Date.now() < USA_VOTE) {
  const script = document.createElement('script')
  script.onload = () => void script.remove()
  script.src = chrome.runtime.getURL('scripts/inject.js')
  document.head.appendChild(script)
}
