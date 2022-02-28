import html from "../core.js";
import { connect } from "../store.js";

function Footer({ todos, filter, filters }) {
	console.log("filters: ", filters);
	return html`
		<footer class="footer">
			<span class="todo-count"
				><strong>${todos.filter(filters.active).length}</strong>
				item left
			</span>
			<ul class="filters">
				${Object.keys(filters).map((type) => {
					return html`
						<li>
							<a
								class="${filter === type && "selected"}"
								href="#"
                                onclick="dispatch('SET_FILTER', '${type}')"
								>${type[0].toUpperCase() + type.slice(1)}</a
							>
						</li>
					`;
				})}
			</ul>
			<button class="clear-completed">Clear completed</button>
		</footer>
	`;
}

export default connect()(Footer);
