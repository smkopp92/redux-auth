class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]

  def create
    user = User.new(user_params)
    if user.save
      render json: { user: user.username, status: 200 }
    else
      render json: { errors: user.errors.full_messages, status: 401 }
    end
  end

  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end
end
