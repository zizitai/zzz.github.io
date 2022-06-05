function codeCommentRemove(f) {　
    return f.toString().replace(/^[^\/]+\/\*!?\s?/, '').replace(/\*\/[^\/]+$/, '');
}
var menuHtml = codeCommentRemove(function () {
    /*
		<!-- 网页导航条开始 -->
		<nav id="导航条">
			<table id="导航条table">
				<tbody>

						<td>
							<div id="websitelink" style="text-align: left;">
								&nbsp;&nbsp;
								<a href="./index.html">主页</a>
								<a href="./111.html">各市州工业产值</a>
								<a href="./222.html">各市州企业数量</a>
								<a href="./demo01.html">卷帘与对比</a>
							</div>
						</td>
					</tr>
				
						</td>
						<td>

							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</nav>
		<!-- 网页导航条结束 -->
    */
});

document.write(menuHtml);