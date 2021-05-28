class ZoosController < ApplicationController
  before_action :set_zoo, only: [:show, :update, :edit, :destroy]
  def index
    @zoos = Zoo.all
    render component: 'Zoos', props:{zoos: @zoos}
  end

  def show
    render component: 'Zoo', props: {zoo: @zoo}
  end

  def new
    @zoo = Zoo.new
    render component: 'ZooNew', props: {zoo: @zoo}
  end

  def create
    @zoo = Zoo.new(zoo_params)
    if @zoo.save
      redirect_to zoos_path
    else
      render component: 'ZooNew', props: {zoo: @zoo}
    end
  end

  def edit
    render component: 'ZooEdit', props: {zoo: @zoo}
  end

  def update
    if @zoo.update(zoo_params)
      redirect_to @zoo
    else
      render component 'ZooEdit', props: {zoo: @zoo}
    end
  end

  def destroy
    @zoo.destroy
    redirect_to zoos_path
  end

  private
  def set_zoo
    @zoo = Zoo.find(params[:id])
  end

  def zoo_params
    params.require(:zoo).permit(:name, :location)
  end
end
