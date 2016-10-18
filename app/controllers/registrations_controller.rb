class RegistrationsController < Devise::RegistrationsController

  def new
    @user = User.new
    render '/users/registrations/new'
  end

  def create
    @user = User.new(sign_up_params)
    if @user.save
      session[:id] = @user.id
      render '/users/registrations/add_skills'
    else
      @errors = @user.errors.full_messages
      render '/users/registrations/new'
    end
  end

end
