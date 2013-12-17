import flask, flask.views
import os
import utilities

class Remote(flask.views.MethodView):
	@utilities.login_required
	def get(self):
		return flask.render_template('remote.html')

	@utilities.login_required
	def post(self):
		result = eval(flask.request.form['expression'])
		flask.flash(result)
		return flask.redirect(flask.url_for('remote'))