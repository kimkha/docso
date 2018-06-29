# docso

Library of reading number in Vietnamese. It converted number to text in reading, for example: `73` => `bảy mươi ba`.

## How to use

### Import from NPM

Run in your command:

`npm install docso`

Use this in your code:

```
import docso from 'docso';

console.log( docso('88377363637678289') );
console.log( docso(1234567890) );
```

### Include in your HTML file

This is your HTML look like:

```
<script src="https://unpkg.com/docso/docso.js"></script>

<script>
console.log( docso('88377363637678289') );
console.log( docso(1234567890) );
</script>
```

## License

MIT License, Copyright (c) 2018 Nguyễn Kim Kha

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
