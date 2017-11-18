class Api::SessionsController < ApplicationController

  # def new
  # end

  def create
    @user = User.find_by_credentials(params[:user][:email],
                                     params[:user][:password])
    if @user
      login(@user)
      render json: @user
    else
      render plain: "Invalid username/password"
    end
  end

  def destroy
    if current_user
      logout
      render plain: "logged out"
    else
      render plain: "404"
    end
  end
end
