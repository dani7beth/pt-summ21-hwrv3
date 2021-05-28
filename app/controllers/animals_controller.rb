class AnimalsController < ApplicationController
  before_action :set_exhibit
  before_action :set_animal, only: [:show, :update, :destroy]
  #CRUD

  #READ
  def index
    @animals = @exhibit.animals
    render component: "Animals", props: {exhibit: @exhibit, animals: @animals}
  end

  def show
    render component: "Animal", props: {exhibit: @exhibit, animal: @animal}
  end

  #CREATE
  def new
    @animal = @exhibit.animals.new
    render component: "AnimalNew", props: {exhibit: @exhibit, animal: @animal}
  end

  def create
    @animal = @exhibit.animals.new(animal_params)
    if @animal.save
      redirect_to [@exhibit, @animal]
    else
      render component: "AnimalNew", props: {exhibit: @exhibit, animal: @animal}
    end
  end
  #UPDATE
  def edit
    render component: "AnimalEdit", props: {exhibit: @exhibit, animal: @animal}
  end

  def update
    if @animal.update(animal_params)
      redirect_to [@exhibit, @animal]
    else
      render :edit
    end
  end
  #DELETE
  def destroy
    @animal.destroy
    redirect_to exhibit_animals_path(@exhibit)
  end

  private

  def set_exhibit
    @exhibit = Exhibit.find(params[:exhibit_id])
  end

  def set_animal
    @animal = Animal.find(params[:id])
  end

  def animal_params
    params.require(:animal).permit(:species, :sex, :age)
  end
end
