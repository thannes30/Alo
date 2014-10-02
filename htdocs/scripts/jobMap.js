$(function(){
  var jobs = {
    az : '<ul><h4>Marshalls</h4><li>3000 South 55th Avenue</li><li>Pheonix, AZ 85043</li></ul>',
    ca : '<ul><h4>Target</h4><li>2245 West Renaissance Parkway</li><li>Realto, CA 92376</li></ul>'+
         '<ul><h4>Paramount Citrus</h4><li>1901 S Lexington Street</li><li>Delano, CA 93215</li></ul>'+
         '<ul><h4>CVS Pharmacy</h4><li>777 South Harbor Boulevard</li><li>La Habra, CA 90631</li></ul>',
    co : '<ul><h4>Aurora</h4><li>6788 State Highway 66</li><li>Platteville, CO 80651</li></ul>',
    ct : '<ul><h4>Frito Lay</h4><li>1886 Upper Maple Street</li><li>Dayville, CT 06241</li></ul>',
    de : '<ul><h4>Burris Refrigerated</h4><li>300 Centerpoint Boulevard</li><li>New Castle, DE 19720</li></ul>',
    fl : '<ul><h4>Publix</h4><li>7173 S Goldenrod Road</li><li>Orlando, FL 32807</li></ul>',
    ga : "<ul><h4>Carter's</h4><li>2160 Breckenridge Boulevard</li><li>Lawrenceville, GA 30043</li></ul>",
    ia : '<ul><h4>John Deere</h4><li>200 Westfield Avenue</li><li>Waterloo, IA 50701</li></ul>',
    id : '<ul><ul><h4>IDA Cold</h4><li>20052 Monti Way</li><li>Caldwell, ID 83607</li></ul>',
    ks : '<ul><h4>Tyson Foods</h4><li>3105 North Ibp Road</li><li>Holcomb, KS 67851</li></ul>',
    ky : '<ul><h4>Owensboro Winnelson</h4><li>2110 Grimes Avenue</li><li>Owensboro KY 42303</li></ul>',
    la : '<ul><h4>AW Grocers</h4><li>63331 Old Military Road</li><li>Pearl River, LA 70452</li></ul>',
    ma : '<ul><h4>Sysco</h4><li>Spring Street & US Route 44</li><li>Plymouth, MA</li></ul>',
    md : '<ul><h4>Kohls</h4><li>1701 Trimbe Road</li><li>Edgewood, MD 21040</li></ul>',
    me : '<ul><h4>Naval Shipyard</h4><li>2 Wentworth Street</li><li>Kittery, ME 03904</li></ul>',
    mi : '<ul><h4>Meijer</h4><li>3301 South Creyts Road</li><li>Lansing, MI 48917</li></ul>',
    mo : '<ul><h4>International Foods</h4><li>6082 Aviator Drive</li><li>Hazewood, MO 63042</li></ul>',
    nc : '<ul><h4>Dealer Solutions</h4><li>10921 Old Statesville Road</li><li>Charlotte, NC 28078</li></ul>',
    nj : '<ul><h4>Sea Frigo</h4><li>730 Dowd Avenue</li><li>Elizabeth, NJ 07201</li></ul>',
    ny : '<ul><h4>UNFI</h4><li>525 Neelytown Road</li><li>Montgomery, NY 12549</li></ul>',
    oh : '<ul><h4>Cargill</h4><li>3400 Industrial Drive</li><li>Sydney, OH 45365</li></ul>',
    ri : '<ul><h4>Daniele Foods</h4><li>1000 Daniele Drive</li><li>Burrillville, RI 02830</li></ul>',
    tn : '<ul><h4>Gap</h4><li>100 Gap Boulevard</li><li>Gallatin, TN 37066</li></ul>',
    tx : '<ul><h4>Blue Bell Creameries</h4><li>1101 South Blue Bell Road</li><li>Brenham, TX 77834</li></ul>',
    ut : '<ul><h4>Walmart</h4><li>5400 West State Road 83</li><li>Corrine, UT 84307</li></ul>',
    va : '<ul><h4>Shamrock Foods</h4><li>318 Mill Place Parkway</li><li>Verona, VA 22602</li></ul>'+
         '<ul><h4>HP Hood</h4><li>160 Hood Way</li><li>Winchester VA, 22602</li></ul>',
    vt : '<ul><h4>Staples</h4><li>160 Paine Turnpike North</li><li>Berlin Corners, VT 05602</li></ul>',
    wa : '<ul><h4>Matson Fruits</h4><li>201 N Railroad Ave</li><li>Selah, WA 98942</li></ul>'+
         '<ul><h4>IKO</h4><li>85 West Front Street</li><li>Sumas, WA 98295</li></ul>',
    wi : '<ul><h4>Meijer</h4><li>8900 Green Bay Road</li><li>Pleasant Prarie, WI 53158</li></ul>',
    wy : '<ul><h4>Quad Graphics</h4><li>205 South College Drive</li><li>Cheyenne, Wyoming 82007</li></ul>'
}
  $('#map').usmap({
    'click': function(event,data){
      var name = data.name.toLowerCase();
      var j = jobs[name];
      $('.we-work').html(j);
    },
    stateStyles: {
      stateHoverAnimation: 1000,
      showLabels: true,
      fill: '#070836',
      stroke: '#fff'
      },
    stateHoverStyles: {fill: '#f2721b'},
  });
});
