var UploadForm = Backbone.View.extend({
  template: _.template("<form action='http:localhost:3000/api/posts \
                          enctype='multipart/form-data \
                          method='POST'> \
                          <input type='file' name='picture' /><br /> \
                          <input type='text' name='description' /><br /> \
                          <button action='submit'>Upload!</button> \
                        </form>"),
  render: function(){
    this.$el.append(this.template());
  },
  initialize: function(){
    this.render();
  }
});
