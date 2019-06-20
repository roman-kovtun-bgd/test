<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
   xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
   <html>
   	<head>

   		<script src="1.js"></script>
		<script src="https://unpkg.com/imask"></script>
   	</head>
   <body >
   
   <table class="info">
     <tr>
       <th>№</th>
       <th>Название</th>
       <th>Автор</th>
       <th>Цена</th>
       <th></th>
     </tr>
     <xsl:for-each select="books/book">
     <tr class="tr">
       <td><xsl:value-of select="id"/></td>
       <td><xsl:value-of select="name"/></td>
       <td><xsl:value-of select="author"/></td>
       <td class="priceW"><xsl:value-of select="price"/></td>
       <td class="button" > Оплатить</td>
     </tr>
     </xsl:for-each>
   </table>
    <table class="popup">
	    <tr>
	    	<td> 
		    	<div>Номер карты</div> </td>
		    	<td align="center" height="30">
		        	<input name="text" id="number" class="field"  type="text" />
		    	</td>
		</tr>
		<tr>
	    	<td> 
		    	<div>Держатель</div> </td>
		    	<td align="center" height="30">
		        	<input name="text" id="people" class="field"  type="text" />
		    	</td>
		</tr>
		
		<tr>
	    	<td> 
		    	<div>Срок/CVV</div> </td>
		    	<td align="center" height="15">
		        	<input name="text" id="term" class="field"  type="text" />

		    	</td>
		    	<p>/</p>
		    	<td >
		        	<input name="text" id="CVV" class="field"  type="text" />
		    	</td>
		</tr>
		<tr>
	    	<td>
	    		<button type="reset" id="close" class="button">Оплата</button> 
	    	</td>   	
		</tr>
	</table>
 	

   </body>
   </html>
</xsl:template>

</xsl:stylesheet> 