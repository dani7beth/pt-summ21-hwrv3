class ExhibitsController < ApplicationController
  before_action :set_zoo
  before_action :set_exhibit, only: [:show, :edit, :update, :destroy]

  def index
    @exhibits = @zoo.exhibits
    render component: "Exhibits", props: {zoo: @zoo, exhibits: @exhibits}
  end

  def show
    render component: "Exhibit", props: {zoo: @zoo, exhibit: @exhibit}
  end

  def new
    @exhibit = @zoo.exhibits.new
    render component: "ExhibitNew", props: {zoo: @zoo, exhibit: @exhibit}
  end

  def create
    @exhibit = @zoo.exhibits.new(exhibit_params)
    if @exhibit.save
      redirect_to [@zoo, @exhibit]
    else
      render :new
    end
  end

  def edit
    render component: "ExhibitEdit", props: {zoo: @zoo, exhibit: @exhibit}
  end

  def update
    if @exhibit.update(exhibit_params)
      redirect_to [@zoo, @exhibit]
    else
      render :edit
    end
  end

  def destroy
    @exhibit.destroy
    redirect_to zoo_exhibits_path(@zoo)
  end

  private
  def set_zoo
    @zoo = Zoo.find(params[:zoo_id])
  end

  def set_exhibit
    @exhibit = Exhibit.find(params[:id])
  end

  def exhibit_params
    params.require(:exhibit).permit(:name)
  end
end
