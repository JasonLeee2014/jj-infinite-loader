# jj-infinite-loader
an infinite loader built for your vue app #EASY to use #EASY to customize

### install

you can install via npm

`npm i jj-infinite-loader`

### how-to-use

1. import

   `import InfiniteLoader from 'jj-infinite-loader'`

2. install this component

   ```js
   components: {
       InfiniteLoader,
     },
   ```

3. Append it to your component (usually a list component), just add it to the tail of the list

4. add your callback function to load and add data to expand the list

   ```html
   <infinite-loader :height="'2rem'" :color="'red'" :busy="busy" @load="callback"></infinite-loader>
   ```

   💖**IMPORTANT**

   to make jj-infinite-loader works properly. In your callback function, you have to bind `busy` props to a variable, and set this variable  to **True** before you do the *load and add data job*. And remember to set it to **False** when you have added new data to the list

   like this:

   ```js
   callback(){
         let self = this
         this.busy = true
         setTimeout(() => {
           self.items = [...self.items,'add','item','to','list']
           self.busy = false
           
         }, 200);
       }
   ```

5. Customise the height and the color of jj-infinite-loader user **height** and **color** props, notice that these 2 props are in type **String**

### DEMO

find more details in demo folder, unzip it and run it like a standerd vue app