$(function(){
  var jobs = {
    az : '<h4>Marshalls</h4><ul><li>3000 S 55th Avenue</li><li>Pheonix, AZ 85043</li></ul>'
    ca : '<h4>Target</h4><ul><li>2245 West Renaissance Parkway</li><li>Realto, CA 92376</li></ul>
          <h4>Paramount Citrus</h4><ul><li>1901 S Lexington Street</li><li>Delano, CA 93215</li></ul>
          <h4>CVS Pharmacy</h4><ul><li>777 South Harbor Boulevard</li><li>La Habra, CA 90631</li></ul>'
    co : '<h4>Aurora</h4><ul><li>6788 State Highway 66</li><li>Platteville, CO 80651</li></ul>'
    ct : '<h4>Frito Lay</h4><ul><li>1886 Upper Maple Street</li><li>Dayville, CT 06241</li></ul>'
    de : '<h4>Burris Refrigerated</h4><ul><li>300 Centerpoint Boulevard</li><li>New Castle, DE 19720</li></ul>'
    fl : '<h4>Publix</h4><ul><li>7173 S Goldenrod Road</li><li>Orlando, FL 32807</li></ul>'
    ga : "<h4>Carter's</h4><ul><li>2160 Breckenridge Boulevard</li><li>Lawrenceville, GA 30043</li></ul>"
    ia : '<h4>John Deere</h4><ul><li>200 Westfield Avenue</li><li>Waterloo, IA 50701</li></ul>'
    id : '<h4>IDA Cold</h4><ul><li>20052 Monti Way</li><li>Caldwell, ID 83607</li></ul>'
    ks : '<h4>Tyson Foods</h4><ul><li>3105 North Ibp Road</li><li>Holcomb, KS 67851</li></ul>'
    ky : '<h4>Owensboro Winnelson</h4><ul><li>2110 Grimes Avenue</li><li>Owensboro KY 42303</li></ul>'
    la : '<h4>AW Grocers</h4><ul><li>63331 Old Military Road</li><li>Pearl River, LA 70452</li></ul>'
    ma : '<h4>Sysco</h4><ul><li>Spring Street & US Route 44</li><li>Plymouth, MA</li></ul>'
    md : '<h4>Kohls</h4><ul><li>1701 Trimbe Road</li><li>Edgewood, MD 21040</li></ul>'
    me : '<h4>Naval Shipyard</h4><ul><li>2 Wentworth Street</li><li>Kittery, ME 03904</li></ul>'
    mi : '<h4>Meijer</h4><ul><li>3301 South Creyts Road</li><li>Lansing, MI 48917</li></ul>'
    mo : '<h4>International Foods</h4><ul><li>6082 Aviator Drive</li><li>Hazewood, MO 63042</li></ul>'
    nc : '<h4>Dealer Solutions</h4><ul><li>10921 Old Statesville Road</li><li>Charlotte, NC 28078</li></ul>'
    nj : '<h4>Sea Frigo</h4><ul><li>730 Dowd Avenue</li><li>Elizabeth, NJ 07201</li></ul>'
    ny : '<h4>UNFI</h4><ul><li>525 Neelytown Road</li><li>Montgomery, NY 12549</li></ul>'
    oh : '<h4>Cargill</h4><ul><li>3400 Industrial Drive</li><li>Sydney, OH 45365</li></ul>'
    ri : '<h4>Daniele Foods</h4><ul><li>1000 Daniele Drive</li><li>Burrillville, RI 02830</li></ul>'
    tn : '<h4>Gap</h4><ul><li>100 Gap Boulevard</li><li>Gallatin, TN 37066</li></ul>'
    tx : '<h4>Blue Bell Creameries</h4><ul><li>1101 South Blue Bell Road</li><li>Brenham, TX 77834</li></ul>'
    ut : '<h4>Walmart</h4><ul><li>5400 West State Road 83</li><li>Corrine, UT 84307</li></ul>'
    va : '<h4>Shamrock Foods</h4><ul><li>318 Mill Place Parkway</li><li>Verona, VA 22602</li></ul>
          <h4>HP Hood</h4><ul><li>160 Hood Way</li><li>Winchester VA, 22602</li></ul>'
    vt : '<h4>Staples</h4><ul><li>160 Paine Turnpike North</li><li>Berlin Corners, VT 05602</li></ul>'
    wa : '<h4>Matson Fruits</h4><ul><li>201 N Railroad Ave</li><li>Selah, WA 98942</li></ul>
          <h4>IKO</h4><ul><li>85- West Front Street</li><li>Sumas, WA 98295</li></ul>'
    wi : '<h4>Meijer</h4><ul><li>8900 Green Bay Road</li><li>Pleasant Prarie, WI 53158</li></ul>'
    wy : '<h4>Quad Graphics</h4><ul><li>205 South College Drive</li><li>Cheyenne, Wyoming 82007</li></ul>'
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
