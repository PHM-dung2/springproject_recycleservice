const mno = new URL(location.href).searchParams.get('mno');
const page = new URL(location.href).searchParams.get('page')
      if(page == null){
         page = 1;
      }

const getPageBtn = ( response, jsp) => {

         
      
         const pagebtnbox = document.querySelector('.pagebtnbox');
         let html = '';
            // 첫페이지 버튼
            html += `<li class="page-item ${ Math.max(response.startBtn - 1, 1) == 1 ? 'disabled' : '' }">
                     <a class="page-link" href="${ jsp }.jsp?mno=${mno}&page=1" aria-label="Previous"> 
                        <span aria-hidden="true">&laquo;</span>
                     </a>
                  </li>`;
            // 이전 버튼
            html += `<li class="page-item ${ page-10 <= 0 ? 'disabled' : '' }">
                     <a class="page-link" href="${ jsp }.jsp?mno=${mno}&page=${ Math.max(response.startBtn - 1, 1) }" aria-label="Previous"> 
                        <span aria-hidden="true" class="arrow">&lt;</span>
                     </a>
                  </li>`;
         for( let i = response.startBtn ; i <= response.endBtn ; i++ ){
            html += `<li class="page-item" >
                     <a class="page-link ${ page == i ? 'active-g' : '' }" 
                        href="${ jsp }.jsp?mno=${mno}&page=${ i }"> 
                        ${ i }
                     </a>
                  </li>`
         } // for end
            // 다음 버튼
            html += `<li class="page-item ${ response.totalPage - response.startBtn < 10 ? 'disabled' : '' }">
                     <a class="page-link" href="${ jsp }.jsp?mno=${mno}&page=${ Math.min(response.endBtn + 1, response.totalPage) }" aria-label="Next"> 
                        <span aria-hidden="true" class="arrow">&gt;</span>
                     </a>
                  </li>`
            // 다음 버튼
            html += `<li class="page-item ${ Math.min(response.endBtn + 1, response.totalPage) == response.endBtn ? 'disabled' : '' }">
               <a class="page-link" href="${ jsp }.jsp?mno=${mno}&page=${ response.totalPage }" aria-label="Next"> 
                  <span aria-hidden="true">&raquo;</span>
               </a>
            </li>`
         
         pagebtnbox.innerHTML = html;
         
      } // f end/**
      