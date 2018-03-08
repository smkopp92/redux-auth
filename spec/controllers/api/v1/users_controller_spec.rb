require 'rails_helper'


RSpec.describe Api::V1::UsersController, type: :controller do
  let(:valid_attributes) {
    {
      username: "sebdawg",
      password: "awesome password",
      password_confirmation: "awesome password"
    }
  }

  let(:invalid_attributes) {
    {
      usernam: "sebdog",
      password: ""
    }
  }

  describe "POST #create" do
    context "with valid params" do
      it "creates a new User" do
        expect {
          post :create, params: { user: valid_attributes }
        }.to change(User, :count).by(1)
      end

      it "returns the username in json form" do
        post :create, params: { user: valid_attributes }
        expect(response.body).to eq "sebdawg"
      end
    end

    context "with invalid params" do
      it "returns a success response (i.e. to display the 'new' template)" do
        post :create, params: { user: invalid_attributes }
        expect(response.body).to eq "[\"Password can't be blank\",\"Username can't be blank\"]"
      end
    end
  end
end
