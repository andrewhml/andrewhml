import flask, flask.views
import os
import utilities


class Music(flask.views.MethodView):
	@utilities.login_required
	def get(self):
		songs = os.listdir('static/music/')
		return flask.render_template('music.html', songs=songs)