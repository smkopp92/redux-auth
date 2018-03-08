class Api::V1::UsersController < ApplicationController
  def create
    binding.pry
    user = User.new(user_params)
    if user.save
      render json: user.username, status: 200
    else
      render json: user.errors.full_messages, status: 401
    end
  end

  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end
end
